package at.ac.fhstp.MEETeUX;

/**
 * Created by kblumenstein on 06.03.18.
 */


import android.Manifest;
import android.app.AlertDialog;
import android.app.Notification;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.SharedPreferences;
import android.graphics.PixelFormat;
import android.media.Ringtone;
import android.media.RingtoneManager;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Vibrator;
import android.preference.PreferenceManager;
import android.provider.Settings;
import android.support.v4.app.NotificationCompat;
import android.support.v4.app.NotificationManagerCompat;
import android.util.Log;
import android.view.View;
import android.view.ViewGroup;
import android.view.Window;
import android.webkit.ValueCallback;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.widget.Toast;
import android.widget.ViewSwitcher;

import com.kontakt.sdk.android.ble.connection.OnServiceReadyListener;
import com.kontakt.sdk.android.ble.device.BeaconRegion;
import com.kontakt.sdk.android.ble.manager.ProximityManager;
import com.kontakt.sdk.android.ble.manager.ProximityManagerFactory;
import com.kontakt.sdk.android.ble.manager.listeners.IBeaconListener;
import com.kontakt.sdk.android.ble.manager.listeners.ScanStatusListener;
import com.kontakt.sdk.android.ble.manager.listeners.simple.SimpleIBeaconListener;
import com.kontakt.sdk.android.ble.manager.listeners.simple.SimpleScanStatusListener;
import com.kontakt.sdk.android.common.KontaktSDK;
import com.kontakt.sdk.android.common.profile.IBeaconDevice;
import com.kontakt.sdk.android.common.profile.IBeaconRegion;

import org.altbeacon.beacon.BeaconManager;
import org.altbeacon.beacon.powersave.BackgroundPowerSaver;
import org.json.JSONException;
import org.json.JSONObject;
import org.xwalk.core.XWalkPreferences;
import org.xwalk.core.XWalkSettings;
import org.xwalk.core.XWalkView;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.UUID;


public class MainActivity extends AbsRuntimePermission {

    private static final int REQUEST_PERMISSION = 10;
    private ProximityManager proximityManager;
    private BackgroundPowerSaver backgroundPowerSaver;
    private BeaconManager beaconManager;

    public ViewSwitcher viewSwitcher;

    static WebView myWebView;
    static MainActivity mySelf;
    static JSInterface myJSInterface;
    static JSInterfaceX myJSInterfaceX;
    XWalkView mXWalkView;

    IBeaconDevice[] beaconItems;
    IBeaconDevice nearestBeacon;
    int nearestBeaconMinor;
    int nearestBeaconMajor;

    Uri notification;
    Ringtone r;

    String nearestBeaconInfos;

    public static NotificationManagerCompat mNotificationManager;

    private static NotificationCompat.Builder mNotificationBuilder;
    private static final int NOTIFICATION_REQUEST_CODE = 2;
    private static Notification mNotification;

    private static boolean activityVisible = true;

    // Setup activity layout
    @Override protected void onCreate(Bundle savedInstanceState)
    {
        requestWindowFeature(Window.FEATURE_NO_TITLE);
        super.onCreate(savedInstanceState);
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT && Build.VERSION.SDK_INT <= Build.VERSION_CODES.LOLLIPOP_MR1) {
            setContentView(R.layout.view_switchx);
        }else if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            setContentView(R.layout.view_switch);
        }
        beaconManager = BeaconManager.getInstanceForApplication(getApplicationContext());

        requestAppPermissions(new String[]{
                        Manifest.permission.ACCESS_FINE_LOCATION,
                        Manifest.permission.BLUETOOTH,
                        Manifest.permission.INTERNET,
                        Manifest.permission.BLUETOOTH_ADMIN,
                        Manifest.permission.ACCESS_NETWORK_STATE
                },
                R.string.msg,
                REQUEST_PERMISSION);

        mySelf = this;
        //this.setContentView(R.layout.view_switch);



        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT && Build.VERSION.SDK_INT <= Build.VERSION_CODES.LOLLIPOP_MR1) {
            //myWebView.setWebContentsDebuggingEnabled(true);
            Log.d("CROSSWALK", "I am using crosswalk!");

            mXWalkView = (XWalkView) findViewById(R.id.xWalkView);

            XWalkPreferences.setValue(XWalkPreferences.REMOTE_DEBUGGING, true);

            XWalkSettings xwalkSettings = mXWalkView.getSettings();
            xwalkSettings.setJavaScriptEnabled(true);
            xwalkSettings.setCacheMode(XWalkSettings.LOAD_NO_CACHE);
            xwalkSettings.setDatabaseEnabled(true);
            xwalkSettings.setDomStorageEnabled(true);
            xwalkSettings.setJavaScriptCanOpenWindowsAutomatically(true);

            myJSInterfaceX = new JSInterfaceX(mXWalkView, this);
            mXWalkView.addJavascriptInterface(myJSInterfaceX, "MEETeUXAndroidAppRoot");
            mXWalkView.loadUrl("file:///android_asset/www/index.html");
        }

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            myWebView = (WebView) findViewById(R.id.webView);

            myWebView.setWebContentsDebuggingEnabled(true);

            WebSettings webSettings = myWebView.getSettings();
            webSettings.setJavaScriptEnabled(true);
            webSettings.setAppCacheEnabled(false);
            webSettings.setDatabaseEnabled(true);
            webSettings.setDomStorageEnabled(true);
            webSettings.setJavaScriptCanOpenWindowsAutomatically(true);

            myJSInterface = new JSInterface(myWebView, this);
            myWebView.addJavascriptInterface(myJSInterface, "MEETeUXAndroidAppRoot");
            myWebView.loadUrl("file:///android_asset/www/index.html");
        }

        //webSettings.setMediaPlaybackRequiresUserGesture(false);

        getWindow().setFormat(PixelFormat.RGBX_8888); // <--- This makes xperia play happy

        // Setup sound for trigger location change
        notification = RingtoneManager.getDefaultUri(RingtoneManager.TYPE_NOTIFICATION);
        r = RingtoneManager.getRingtone(getApplicationContext(), notification);
        clearLastBeacon();

        activityVisible = true;
        mNotificationManager = NotificationManagerCompat.from(this);
    }

    @Override
    public void onPermissionsGranted(int requestCode){
        // Do anything when permission granted
        Toast.makeText(getApplicationContext(), "Permission granted", Toast.LENGTH_LONG).show();

        KontaktSDK.initialize(this);
        proximityManager = ProximityManagerFactory.create(this);


        Collection<IBeaconRegion> beaconRegions = new ArrayList<>();

        IBeaconRegion region1 = new BeaconRegion.Builder()
                .identifier("My Region")
                .proximity(UUID.fromString("f7826da6-4fa2-4e98-8024-bc5b71e0893e"))
                .build();


        beaconRegions.add(region1);

        proximityManager.spaces().iBeaconRegions(beaconRegions);
        //  proximityManager.configuration().activityCheckConfiguration(ActivityCheckConfiguration.MINIMAL);
        proximityManager.configuration().deviceUpdateCallbackInterval(500);

        proximityManager.setIBeaconListener(new IBeaconListener() {
            @Override
            public void onIBeaconDiscovered(IBeaconDevice iBeacon, IBeaconRegion region) {
                //Beacon discovered
                Log.i("Sample", "IBeacon discovered: " + iBeacon.toString());


            }

            /*
            private ScanSettings getScanSettings()
            {
                final ScanSettings.Builder builder = new ScanSettings.Builder();
                builder.setReportDelay(0);
                builder.setScanMode(ScanSettings.SCAN_MODE_LOW_POWER);
                return builder.build();
            }*/

            @Override
            public void onIBeaconsUpdated(List<IBeaconDevice> iBeacons, IBeaconRegion region) {
                //Beacons updated
                Log.i("Sample", "IBeacon updated: " + iBeacons.toString());

                //readBeaconData(iBeacons);
                beaconItems = new IBeaconDevice[iBeacons.size()];
                List<IBeaconDevice> newList = new ArrayList<>(iBeacons);
                Collections.sort(newList, new Comparator<IBeaconDevice>() {
                    @Override
                    public int compare(IBeaconDevice lhs, IBeaconDevice rhs) {
                        int returnVal = 0;

                        if(lhs.getRssi() < rhs.getRssi()){
                            returnVal =  1;
                        }else if(lhs.getRssi() > rhs.getRssi()){
                            returnVal =  -1;
                        }else if(lhs.getRssi() == rhs.getRssi()){
                            returnVal =  0;
                        }
                        return returnVal;
                    }
                });

                int helpCounter = 0;
                for(int i = 0; i<newList.size();i++) {
                    if((String.valueOf(newList.get(i).getMajor()).length()==2&&String.valueOf(newList.get(i).getProximity()).equals("NEAR"))||(String.valueOf(newList.get(i).getMajor()).length()==2&&String.valueOf(newList.get(i).getProximity()).equals("IMMEDIATE"))) {
                        beaconItems[helpCounter] = newList.get(i);
                        helpCounter++;
                    }else if(String.valueOf(newList.get(i).getMajor()).length()==3&&String.valueOf(newList.get(i).getProximity()).equals("IMMEDIATE")){
                        beaconItems[helpCounter] = newList.get(i);
                        helpCounter++;
                    }else{
                        beaconItems[helpCounter]=null;
                        helpCounter++;
                    }
                }
                int beaconItemsArraySize = 0;
                for(int i = 0; i<beaconItems.length;i++){
                    if(beaconItems[i]!=null){
                        beaconItemsArraySize++;
                    }
                }

                IBeaconDevice[] triggeredBeaconDevices = new IBeaconDevice[beaconItemsArraySize];
                int helpCounterBeacons = 0;
                for(int i = 0; i<beaconItems.length;i++){
                    if(beaconItems[i]!=null){
                        triggeredBeaconDevices[helpCounterBeacons] = beaconItems[i];
                        helpCounterBeacons++;
                    }
                }



                for(int i = 0; i<triggeredBeaconDevices.length;i++) {
                    if(i==0){
                        nearestBeacon = triggeredBeaconDevices[0];
                        nearestBeaconMajor = triggeredBeaconDevices[0].getMajor();
                        nearestBeaconMinor = triggeredBeaconDevices[0].getMinor();

                        update_location();
                    }
                }
            }

            @Override
            public void onIBeaconLost(IBeaconDevice iBeacon, IBeaconRegion region) {
                //Beacon lost
                Log.i("Sample", "IBeacon lost: " + iBeacon.toString());
            }
        });

        proximityManager.setScanStatusListener(createScanStatusListener());
    }

    public IBeaconDevice nearestBeaconDetected(){
        return nearestBeacon;
    }

    public int nearestBeaconMinorDetected(){
        return nearestBeaconMinor;
    }

    public int nearestBeaconMajorDetected(){
        return nearestBeaconMajor;
    }


    public String getDeviceInfosNative(){
        JSONObject jObject = new JSONObject();
        try {
            jObject.put("deviceAddress", Settings.Secure.ANDROID_ID);
            jObject.put("deviceOS", "Android");
            jObject.put("deviceVersion", Build.VERSION.RELEASE);
            jObject.put("deviceModel", android.os.Build.MODEL);

        } catch (JSONException e) {
            e.printStackTrace();
        }

        String deviceInfos = jObject.toString();

        Log.d("DeviceInfos", deviceInfos);

        return deviceInfos;
    }

    public void registerODNatve(){
        Log.i("Sample", "Start scanning");
        startScanning();
    }

    String filename = "auth-token.txt";
    FileOutputStream outputStream;


    public void saveToken(String token){
        Log.i("Sample", "Save Token "+token);
        File file = new File(this.getFilesDir(), filename);

        try {
            outputStream = openFileOutput(filename, Context.MODE_PRIVATE);
            outputStream.write(token.getBytes());
            outputStream.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }


    public void clearToken(){
        File file = new File(this.getFilesDir(), filename);
        boolean deleted = file.delete();
        Log.i("logout", "Clear Token");
        Log.i("logout", "Stop scanning");
        proximityManager.stopScanning();

    }

    public String getToken(){
        File file = new File(this.getFilesDir(),filename);

        //Read text from file
        StringBuilder text = new StringBuilder();

        try {
            BufferedReader br = new BufferedReader(new FileReader(file));
            String line;

            while ((line = br.readLine()) != null) {
                text.append(line);
                //text.append('\n');
            }
            br.close();
        }
        catch (IOException e) {
            e.printStackTrace();
        }
        Log.i("Sample", "Send Token to Web " + text.toString());

        JSONObject jObject = new JSONObject();
        try {
            jObject.put("token", text.toString());

        } catch (JSONException e) {
            e.printStackTrace();
        }

        return jObject.toString();
    }

    public void showNewLocationNotification(String notificationTitle, String notificationMessage){
        Log.d("Notification", "JETZT");
        mNotificationBuilder = //create a builder for the detection notification
                new NotificationCompat.Builder(this)
                        .setSmallIcon(R.drawable.app_banner) //adding the icon
                        .setContentTitle(notificationTitle) //adding the title
                        .setContentText(notificationMessage) //adding the text
                        //Requires API 21 .setCategory(Notification.CATEGORY_SERVICE)
                        .setOngoing(true); //it's canceled when tapped on it

        Intent resultIntent = new Intent(this, MainActivity.class); //the intent is still the main-activity

        resultIntent.addFlags(Intent.FLAG_ACTIVITY_SINGLE_TOP);

        PendingIntent resultPendingIntent = PendingIntent.getActivity(
                getApplicationContext(),
                NOTIFICATION_REQUEST_CODE,
                resultIntent,
                PendingIntent.FLAG_UPDATE_CURRENT);

        mNotificationBuilder.setContentIntent(resultPendingIntent);

        mNotification = mNotificationBuilder.build(); //build the notiviation

        mNotificationManager.notify(NOTIFICATION_REQUEST_CODE, mNotification); //activate the notification with the notification itself and its id
    }

    public void showNewLocationAlert(String alertTitle, String alertMessage){
        AlertDialog.Builder alertBuilder = new AlertDialog.Builder(this);
        alertBuilder.setTitle(alertTitle)
                .setMessage(alertMessage)
                .setPositiveButton("View exhibit", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialogInterface, int i) {
                        sendLocationUpdate();
                        proximityManager.startScanning();
                        mNotificationManager.cancel(NOTIFICATION_REQUEST_CODE);
                    }
                })
                .setNegativeButton("Don't view exhibit", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialogInterface, int i) {
                        proximityManager.startScanning();
                        dialogInterface.cancel();
                        mNotificationManager.cancel(NOTIFICATION_REQUEST_CODE);
                    }
                })
                .setCancelable(false)
                .create()
                .show();
    }

    public void update_location(){
        JSONObject jObject = new JSONObject();
        try {
            jObject.put("minor", nearestBeaconMinor);
            jObject.put("major", nearestBeaconMajor);

        } catch (JSONException e) {
            e.printStackTrace();
        }

        nearestBeaconInfos = jObject.toString();

        SharedPreferences sp = PreferenceManager.getDefaultSharedPreferences(getApplicationContext());
        int lastBeaconMinor = sp.getInt("LastBeaconMinor", 0);
        int lastBeaconMajor = sp.getInt("LastBeaconMajor", 0);
        //sendLocationUpdate();
        if((lastBeaconMajor != nearestBeaconMajor && lastBeaconMinor != nearestBeaconMinor) || (lastBeaconMajor != nearestBeaconMajor && lastBeaconMinor == nearestBeaconMinor) || (lastBeaconMajor == nearestBeaconMajor && lastBeaconMinor != nearestBeaconMinor)){
            //proximityManager.stopScanning();
            sendLocationUpdate();
            if(!activityVisible) {
                showNewLocationNotification("New Exhibit", "Exhibit "+ nearestBeaconMinor);
            }
            //showNewLocationAlert("New Exhibit "+ nearestBeaconMinor, "Do you want to view this Exhibit?");
        }else {
            Log.d("update_location", "No new beacon = no update!");
        }


    }

    public void changeBeacon(){
        Log.d("ChangeBeacon", "I got changed");
        sendLocationUpdate();
    }


    public void sendLocationUpdate(){
        mySelf.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                SharedPreferences sp = PreferenceManager.getDefaultSharedPreferences(getApplicationContext());
                SharedPreferences.Editor ed = sp.edit();
                ed.putInt("LastBeaconMinor", nearestBeaconMinor);
                ed.putInt("LastBeaconMajor", nearestBeaconMajor);
                ed.apply();
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
                    myWebView.evaluateJavascript("javascript:update_location("+ nearestBeaconInfos +")", new ValueCallback<String>() {
                        @Override
                        public void onReceiveValue(String value) {
                            //Log.i("onReceiveValue! " + value);
                            Log.d("CheckReceive","Es ist was passiert");
                        }
                    });
                }
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT && Build.VERSION.SDK_INT <= Build.VERSION_CODES.LOLLIPOP_MR1) {
                    mXWalkView.evaluateJavascript("javascript:update_location(" + nearestBeaconInfos + ")", new ValueCallback<String>() {
                        @Override
                        public void onReceiveValue(String value) {
                            //Log.i("onReceiveValue! " + value);
                            Log.d("CheckReceive", "Es ist was passiert");
                        }
                    });
                }
            }
        });
    }

    public void stopScanner(){
        proximityManager.stopScanning();
        Log.d("AlertStopScanning", "stopScanning");
    }

    public void restartScanner(){
        proximityManager.startScanning();
        Log.d("AlertStartScanning", "startScanning");
    }

    public void clearLastBeacon(){
        SharedPreferences sp = PreferenceManager.getDefaultSharedPreferences(getApplicationContext());
        SharedPreferences.Editor ed = sp.edit();
        ed.remove("LastBeaconMinor");
        ed.remove("LastBeaconMajor");
        ed.apply();
    }

    public void triggerSignalNative(){
        Log.d("Status", "Trigger signal native");

        // vibrate
        Vibrator v = (Vibrator) getSystemService(Context.VIBRATOR_SERVICE);
        // Vibrate for 500 milliseconds
        v.vibrate(500);

        // play sound
        r.play();
    }

    public static void activityInBackground() {
        activityVisible = false;
    }

    public static void activityInFront() {
        activityVisible = true;
    }

    /***************
     *
     *  Overrides for Beacon Manager
     *
     *
     */

    @Override
    protected void onResume(){
        super.onResume();
        activityInFront();
    }

    @Override
    protected void onStart() {
        super.onStart();
        activityInFront();
    }

    @Override
    protected void onPause(){
        super.onPause();
        activityInBackground();
    }

    @Override
    protected void onStop() {
        //Log.i("Sample", "Stop scanning");
        //proximityManager.stopScanning();
        super.onStop();
        activityInBackground();
    }

    @Override
    protected void onDestroy() {
        proximityManager.disconnect();
        proximityManager = null;
        clearLastBeacon();
        Log.i("Sample", "Destroy");
        super.onDestroy();
    }

    private void startScanning() {
        proximityManager.connect(new OnServiceReadyListener() {
            @Override
            public void onServiceReady() {
                proximityManager.startScanning();
            }
        });
    }

    private IBeaconListener createIBeaconListener() {
        return new SimpleIBeaconListener() {
            @Override
            public void onIBeaconDiscovered(IBeaconDevice ibeacon, IBeaconRegion region) {
                Log.i("Sample", "Beacon discovered");
                Log.i("Sample", "IBeacon discovered: " + ibeacon.toString());
            }
        };
    }


    private void showToast(final String message) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                Toast.makeText(MainActivity.this, message, Toast.LENGTH_SHORT).show();
            }
        });
    }

    private ScanStatusListener createScanStatusListener() {
        return new SimpleScanStatusListener() {
            @Override
            public void onScanStart() {
                showToast("Scanning started");
            }

            @Override
            public void onScanStop() {
                showToast("Scanning stopped");
            }
        };
    }
}
