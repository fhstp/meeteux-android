package at.ac.fhstp.MEETeUX;

/**
 * Created by kblumenstein on 06.03.18.
 */


import android.Manifest;
import android.app.AlertDialog;
import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.bluetooth.BluetoothAdapter;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.IntentFilter;
import android.content.SharedPreferences;
import android.graphics.PixelFormat;
import android.media.Ringtone;
import android.media.RingtoneManager;
import android.net.Uri;
import android.net.wifi.WifiInfo;
import android.net.wifi.WifiManager;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.os.Vibrator;
import android.preference.PreferenceManager;
import android.provider.Settings;
import android.support.v4.app.NotificationCompat;
import android.support.v4.app.NotificationManagerCompat;
import android.util.Log;
import android.view.Window;
import android.webkit.ValueCallback;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
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
import org.apache.commons.collections.buffer.CircularFifoBuffer;
import org.json.JSONException;
import org.json.JSONObject;
import org.xwalk.core.XWalkPreferences;
import org.xwalk.core.XWalkResourceClient;
import org.xwalk.core.XWalkSettings;
import org.xwalk.core.XWalkView;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.IOException;
import java.math.BigInteger;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.apache.commons.lang3.ArrayUtils;

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

    boolean proximityManagerToRestart = false;
    boolean bluetoothTurnedOff = false;
    boolean bluetoothTurnedOnAgain = false;

    public static NotificationManagerCompat mNotificationManager;
    public static NotificationManager mNotificationManagerOreoAbove;

    private static NotificationCompat.Builder mNotificationBuilder;
    private static final int NOTIFICATION_REQUEST_CODE = 2;
    private static Notification mNotification;
    private static final String NOTIFICATION_CHANNEL_ID = "1";
    private static CharSequence name = "MeeteuxChannel";// The user-visible name of the channel.
    public static int importance;
    public static NotificationChannel mChannel;

    private static boolean activityVisible = true;

    private final static int INTERVAL = 1000 * 60 /6; //30 seconds
    Handler mHandler = new Handler();

    boolean useCircularBuffer = true;
    List<String> receivedBeacons = new ArrayList<String>();
    Map<String, CircularFifoBuffer> beaconBufferDict = new HashMap<String, CircularFifoBuffer>();
    String nearestBeaconKey = null;
    double nearestBeaconRSSI = -200;

    public WifiManager mWifiManger;
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

        IntentFilter filter = new IntentFilter(BluetoothAdapter.ACTION_STATE_CHANGED);
        registerReceiver(mReceiver, filter);

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
            xwalkSettings.setAllowFileAccessFromFileURLs(true);

            myJSInterfaceX = new JSInterfaceX(mXWalkView, this);
            mXWalkView.addJavascriptInterface(myJSInterfaceX, "MEETeUXAndroidAppRoot");

            XWalkResourceClient client = new XWalkResourceClient(mXWalkView){
                @Override
                public boolean shouldOverrideUrlLoading(XWalkView view, String url){
                    return false;
                }
            };
            mXWalkView.setResourceClient(client);

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
            webSettings.setAllowFileAccessFromFileURLs(true);


            myJSInterface = new JSInterface(myWebView, this);
            myWebView.addJavascriptInterface(myJSInterface, "MEETeUXAndroidAppRoot");

            WebViewClient client = new WebViewClient(){
                @Override
                public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request){
                    return false;
                }
            };
            myWebView.setWebViewClient(client);

            myWebView.loadUrl("file:///android_asset/www/index.html");
        }

        //webSettings.setMediaPlaybackRequiresUserGesture(false);

        getWindow().setFormat(PixelFormat.RGBX_8888); // <--- This makes xperia play happy

        // Setup sound for trigger location change
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            mNotificationManagerOreoAbove = (NotificationManager) this.getSystemService(Context.NOTIFICATION_SERVICE);
        }else {
            mNotificationManager = NotificationManagerCompat.from(this);
        }
        notification = RingtoneManager.getDefaultUri(RingtoneManager.TYPE_NOTIFICATION);
        r = RingtoneManager.getRingtone(getApplicationContext(), notification);
        clearLastBeacon();

        activityVisible = true;
        Log.d("CheckWifi", "CheckWifi");

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
        proximityManager.configuration().deviceUpdateCallbackInterval(250);

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

                if(!useCircularBuffer) {
                    int helpCounter = 0;
                    for (int i = 0; i < newList.size(); i++) {
                        if ((String.valueOf(newList.get(i).getMajor()).length() == 2 && String.valueOf(newList.get(i).getProximity()).equals("NEAR")) || (String.valueOf(newList.get(i).getMajor()).length() == 2 && String.valueOf(newList.get(i).getProximity()).equals("IMMEDIATE"))) {
                            beaconItems[helpCounter] = newList.get(i);
                            helpCounter++;
                        } else if (String.valueOf(newList.get(i).getMajor()).length() == 3 && String.valueOf(newList.get(i).getProximity()).equals("IMMEDIATE")) {
                            beaconItems[helpCounter] = newList.get(i);
                            helpCounter++;
                        } else {
                            beaconItems[helpCounter] = null;
                            helpCounter++;
                        }
                    }
                    int beaconItemsArraySize = 0;
                    for (int i = 0; i < beaconItems.length; i++) {
                        if (beaconItems[i] != null) {
                            beaconItemsArraySize++;
                        }
                    }

                    IBeaconDevice[] triggeredBeaconDevices = new IBeaconDevice[beaconItemsArraySize];
                    int helpCounterBeacons = 0;
                    for (int i = 0; i < beaconItems.length; i++) {
                        if (beaconItems[i] != null) {
                            triggeredBeaconDevices[helpCounterBeacons] = beaconItems[i];
                            helpCounterBeacons++;
                        }
                    }


                    for (int i = 0; i < triggeredBeaconDevices.length; i++) {
                        if (i == 0) {
                            nearestBeacon = triggeredBeaconDevices[0];
                            nearestBeaconMajor = triggeredBeaconDevices[0].getMajor();
                            nearestBeaconMinor = triggeredBeaconDevices[0].getMinor();

                            update_location();
                        }
                    }
                }else{
                    //int helpCounter = 0;
                    for(int i = 0; i<newList.size();i++) {
                        //String helpString = newList.get(i).getProximity() + "";
                        //if(newList.get(i).getMajor()==20&&String.valueOf(newList.get(i).getProximity()).equals("NEAR")) {
                        if(!beaconBufferDict.containsKey(String.valueOf(newList.get(i).getMinor())+'/'+String.valueOf(newList.get(i).getMajor()))){
                            beaconBufferDict.put(String.valueOf(newList.get(i).getMinor())+'/'+String.valueOf(newList.get(i).getMajor()), new CircularFifoBuffer(12));
                            CircularFifoBuffer helpBuffer = beaconBufferDict.get(String.valueOf(newList.get(i).getMinor())+'/'+String.valueOf(newList.get(i).getMajor()));
                            helpBuffer.add(newList.get(i).getRssi());
                            beaconBufferDict.put(String.valueOf(newList.get(i).getMinor())+'/'+String.valueOf(newList.get(i).getMajor()), helpBuffer);
                        }else{
                            CircularFifoBuffer helpBuffer = beaconBufferDict.get(String.valueOf(newList.get(i).getMinor())+'/'+String.valueOf(newList.get(i).getMajor()));
                            helpBuffer.add(newList.get(i).getRssi());
                            beaconBufferDict.put(String.valueOf(newList.get(i).getMinor())+'/'+String.valueOf(newList.get(i).getMajor()), helpBuffer);
                        }
                        receivedBeacons.add(String.valueOf(newList.get(i).getMinor())+'/'+String.valueOf(newList.get(i).getMajor()));


                        /*String beaconName = "Major " + newList.get(i).getMajor() + " " + "Minor " + newList.get(i).getMinor() + " " + "Proximity " + newList.get(i).getProximity();
                        String beaconRssi = "RSSI " + String.valueOf(newList.get(i).getRssi());
                        beaconItems[helpCounter] = beaconName + " " + beaconRssi;
                        helpCounter++;*/
                    /*}else if(newList.get(i).getMajor()==10&&String.valueOf(newList.get(i).getProximity()).equals("IMMEDIATE")){
                        String beaconName = "Major " + newList.get(i).getMajor() + " " + "Minor " + newList.get(i).getMinor() + " " + "Proximity " + newList.get(i).getProximity();
                        String beaconRssi = "RSSI " + String.valueOf(newList.get(i).getRssi());
                        beaconItems[helpCounter] = beaconName + " " + beaconRssi;
                        helpCounter++;
                    }else{
                        beaconItems[helpCounter]="";
                        helpCounter++;
                    }*/
                    }
                    //TODO: CHECK If circularbuffer is full
                    Iterator it = beaconBufferDict.entrySet().iterator();
                    while(it.hasNext()) {
                        Map.Entry pair = (Map.Entry)it.next();
                        CircularFifoBuffer helpbuffer = (CircularFifoBuffer) pair.getValue();
                        boolean alreadyReceived = false;
                        for(int i = 0; i<receivedBeacons.size(); i++){
                            if(pair.getKey().equals(receivedBeacons.get(i))){
                                alreadyReceived = true;
                            }
                        }
                        if(!alreadyReceived){
                            helpbuffer.add(-200);
                        }
                        alreadyReceived = false;
                        if(helpbuffer.isFull()){
                            //TODO: CALCULATE median of full circularbuffer
                            double[] helpdouble = new double[helpbuffer.size()];
                            String helpstring = helpbuffer.toString();
                            helpstring = helpstring.replace("[","");
                            helpstring = helpstring.replace("]","");
                            String[] helpStringArray = helpstring.split(", ");

                            for(int i = 0; i<helpbuffer.size(); i++){
                                helpdouble[i] = Double.valueOf(helpStringArray[i]);
                            }

                            if(median(helpdouble)>nearestBeaconRSSI){
                                nearestBeaconRSSI = median(helpdouble);
                                nearestBeaconKey = pair.getKey().toString();
                            }
                        }else{
                            //Log.d("CircBuffer", pair.getKey() + " is not full");
                        }
                    }
                    if(nearestBeaconKey != null) {
                        Log.d("NearestBeacon", nearestBeaconKey + " " + nearestBeaconRSSI);
                        String[] beaconValues = nearestBeaconKey.split("/");
                        nearestBeaconMajor = Integer.valueOf(beaconValues[1]);
                        nearestBeaconMinor = Integer.valueOf(beaconValues[0]);
                        Log.d("NearestBeaconInt", beaconValues[0] + " " + beaconValues[1]);

                        update_location();
                        nearestBeaconKey = null;
                        nearestBeaconRSSI = -200;
                    }
                    receivedBeacons.clear();
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

    public static double median(double[] m) {
        int middle = m.length/2;
        if (m.length%2 == 1) {
            return m[middle];
        } else {
            return (m[middle-1] + m[middle]) / 2.0;
        }
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
        stopRepeatingTask();
        //unregisterReceiver(mReceiver);

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
        //checkWifiSSID();
        //checkBluetoothStatus();
        return jObject.toString();
    }

    public void showNewLocationNotification(String notificationTitle, String notificationMessage){

        //Log.d("Notification", "JETZT");
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            importance = mNotificationManagerOreoAbove.IMPORTANCE_HIGH;
            mChannel = new NotificationChannel(NOTIFICATION_CHANNEL_ID, name, importance);
        }

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            mNotificationBuilder =
                new NotificationCompat.Builder(this, NOTIFICATION_CHANNEL_ID)
                        .setSmallIcon(R.drawable.app_banner)
                        .setContentTitle(notificationTitle)
                        .setChannelId(NOTIFICATION_CHANNEL_ID)
                        .setContentText(notificationMessage);

        }else {
            Log.d("Notification", "JETZT");
            mNotificationBuilder =
                new NotificationCompat.Builder(this)
                        .setSmallIcon(R.drawable.app_banner)
                        .setContentTitle(notificationTitle)
                        .setContentText(notificationMessage)
                        .setPriority(Notification.PRIORITY_HIGH);
        }

        Intent resultIntent = new Intent(this, MainActivity.class); //the intent is still the main-activity

        resultIntent.addFlags(Intent.FLAG_ACTIVITY_SINGLE_TOP);

        PendingIntent resultPendingIntent = PendingIntent.getActivity(
                this,
                NOTIFICATION_REQUEST_CODE,
                resultIntent,
                PendingIntent.FLAG_UPDATE_CURRENT);

        mNotificationBuilder.setContentIntent(resultPendingIntent);

        mNotification = mNotificationBuilder.build(); //build the notification
        mNotification.flags = Notification.FLAG_AUTO_CANCEL;

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            mNotificationManagerOreoAbove.createNotificationChannel(mChannel);
            mNotificationManagerOreoAbove.notify(NOTIFICATION_REQUEST_CODE, mNotification);
        }else {
            mNotificationManager.notify(NOTIFICATION_REQUEST_CODE, mNotification); //activate the notification with the notification itself and its id
        }
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
        //if((lastBeaconMajor != nearestBeaconMajor && lastBeaconMinor != nearestBeaconMinor) || (lastBeaconMajor != nearestBeaconMajor && lastBeaconMinor == nearestBeaconMinor) || (lastBeaconMajor == nearestBeaconMajor && lastBeaconMinor != nearestBeaconMinor)){
            //proximityManager.stopScanning();
            sendLocationUpdate();
            /*if(!activityVisible) {
                showNewLocationNotification("New Exhibit", "Exhibit "+ nearestBeaconMinor);
            }*/
            //showNewLocationAlert("New Exhibit "+ nearestBeaconMinor, "Do you want to view this Exhibit?");
        //}else {
        //    Log.d("update_location", "No new beacon = no update!");
        //}


    }

    public void showNotificationBackground(String exhibit){
        if(!activityVisible) {
            showNewLocationNotification("New Exhibit", "Exhibit "+ exhibit);
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
        unregisterReceiver(mReceiver);
        //clearLastBeacon();
        Log.i("Sample", "Destroy");
        super.onDestroy();
    }

    private void startScanning() {
        proximityManager.connect(new OnServiceReadyListener() {
            @Override
            public void onServiceReady() {
                proximityManager.startScanning();
                startRepeatingTask();
                checkWifiSSID();
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

    public void getWifiStatusResultNative(String message){
        if(message.equals("correctWifi")){
            Log.d("WifiStatus", "Wifi is correct");
        }else if(message.equals("wrongWifi")){
            //showWifiStatusAlert();
            Log.d("WifiStatus", "Wifi is wrong");
        }
    }

    public void checkWifiSSID(){
        WifiManager wifi = (WifiManager) this.getApplicationContext().getSystemService(Context.WIFI_SERVICE);
        WifiInfo wifiInfo = wifi.getConnectionInfo();
        byte[] myIPAddress = BigInteger.valueOf(wifiInfo.getIpAddress()).toByteArray();
        ArrayUtils.reverse(myIPAddress);
        InetAddress myInetIP = null;
        try {
            myInetIP = InetAddress.getByAddress(myIPAddress);
        } catch (UnknownHostException e) {
            e.printStackTrace();
        }
        if(myInetIP != null) {
            String myIP = myInetIP.getHostAddress();
            if (wifiInfo != null) {
                String currentConnectedSSID = wifiInfo.getSSID();
                Log.e("checkWIFIStatusSSID", wifiInfo.getSSID());
                Log.e("checkWIFIStatusIP", myIP);

                currentConnectedSSID = currentConnectedSSID.replace("\"", "");
                Log.e("checkWIFIStatusSSID", currentConnectedSSID);

                JSONObject jObject = new JSONObject();
                try {
                    jObject.put("ssid", currentConnectedSSID);

                } catch (JSONException e) {
                    e.printStackTrace();
                }

                String ssid = jObject.toString();

                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
                    myWebView.evaluateJavascript("javascript:send_wifi_ssid(" + ssid + ")", new ValueCallback<String>() {
                        @Override
                        public void onReceiveValue(String value) {
                            //Log.i("onReceiveValue! " + value);
                            Log.d("Status", "Callback from send to web");
                        }
                    });
                }
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT && Build.VERSION.SDK_INT <= Build.VERSION_CODES.LOLLIPOP_MR1) {
                    mXWalkView.evaluateJavascript("javascript:send_wifi_ssid(" + ssid + ")", new ValueCallback<String>() {
                        @Override
                        public void onReceiveValue(String value) {
                            //Log.i("onReceiveValue! " + value);
                            Log.d("Status", "Callback from send to web");
                        }
                    });
                }
            }
        }else{
            JSONObject jObject = new JSONObject();
            try {
                jObject.put("ssid", "notAvailable");

            } catch (JSONException e) {
                e.printStackTrace();
            }

            String ssid = jObject.toString();

            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
                myWebView.evaluateJavascript("javascript:send_wifi_ssid(" + ssid + ")", new ValueCallback<String>() {
                    @Override
                    public void onReceiveValue(String value) {
                        //Log.i("onReceiveValue! " + value);
                        Log.d("Status", "Callback from send to web");
                    }
                });
            }
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT && Build.VERSION.SDK_INT <= Build.VERSION_CODES.LOLLIPOP_MR1) {
                mXWalkView.evaluateJavascript("javascript:send_wifi_ssid(" + ssid + ")", new ValueCallback<String>() {
                    @Override
                    public void onReceiveValue(String value) {
                        //Log.i("onReceiveValue! " + value);
                        Log.d("Status", "Callback from send to web");
                    }
                });
            }
        }
    }

    public void openWifiDialogNative(){
        AlertDialog.Builder alertBuilder = new AlertDialog.Builder(this);
        alertBuilder.setTitle("Wifi Status")
                .setMessage("You are in the wrong Wifi. Please change to the Wifi called MEETeUX!")
                .setPositiveButton("YES", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialogInterface, int i) {
                        activateWifiNative();
                        checkBluetoothStatus();
                    }
                })
                .setNegativeButton("NO", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialogInterface, int i) {
                        checkBluetoothStatus();
                    }
                })
                .setCancelable(false)
                .create()
                .show();
    }

    /*public void showWifiStatusAlert(){
        AlertDialog.Builder alertBuilder = new AlertDialog.Builder(this);
        alertBuilder.setTitle("Wifi Status")
                .setMessage("You are in the wrong Wifi. Please change to the Wifi called MEETeUX!")
                .setPositiveButton("OK", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialogInterface, int i) {

                    }
                })
                .setCancelable(false)
                .create()
                .show();
    }*/

    Runnable mHandlerTask = new Runnable()
    {
        @Override
        public void run() {
            //checkWifiSSID();
            checkScanStatus();
            //checkBluetoothStatus();
            mHandler.postDelayed(mHandlerTask, INTERVAL);
        }
    };

    void startRepeatingTask()
    {
        mHandler.postDelayed(mHandlerTask, INTERVAL);
        //mHandlerTask.run();
    }

    void stopRepeatingTask()
    {
        mHandler.removeCallbacks(mHandlerTask);
    }

    void checkScanStatus(){
        Log.e("checkScanStatus", "Scanning was checked");
        if(proximityManagerToRestart) {
            Log.e("checkScanStatus", "Bluetooth was turned off");
            proximityManagerToRestart = false;
            proximityManager.restartScanning();
        }
        if(!proximityManager.isConnected()){
            Log.e("checkScanStatus", "Not connected and will be restarted");
            proximityManager.connect(new OnServiceReadyListener() {
                @Override
                public void onServiceReady() {
                    proximityManager.startScanning();
                }
            });
        }
        if(!proximityManager.isScanning() && proximityManager.isConnected()){
            //Toast.makeText(this, "Stopped and restarted scanning!", Toast.LENGTH_LONG).show();
            Log.e("checkScanStatus", "Scanning was stopped and will be restarted");

            proximityManager.restartScanning();
        }
        if(proximityManager.isScanning() && proximityManager.isConnected()){
            Log.e("checkScanStatus", "connected and scanning");
        }
    }

    void checkBluetoothStatus(){
        BluetoothAdapter mBluetoothAdapter = BluetoothAdapter.getDefaultAdapter();
        if (mBluetoothAdapter == null) {
            //no bluetooth support
        } else {
            if (mBluetoothAdapter.isEnabled()) {
                //Toast.makeText(this, "Bluetooth is on", Toast.LENGTH_LONG).show();
                Log.d("checkBluetoothStatus", "Bluetooth is on");
            }else{
                AlertDialog.Builder alertBuilder = new AlertDialog.Builder(this);
                alertBuilder.setTitle("Bluetooth Status")
                        .setMessage("Bluetooth is not activated. Do you want to activate it?")
                        .setPositiveButton("YES", new DialogInterface.OnClickListener() {
                            @Override
                            public void onClick(DialogInterface dialogInterface, int i) {
                                activateBluetoothNative();
                            }
                        })
                        .setNegativeButton("NO", new DialogInterface.OnClickListener() {
                            @Override
                            public void onClick(DialogInterface dialogInterface, int i) {

                            }
                        })
                        .setCancelable(false)
                        .create()
                        .show();
                /*if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
                    myWebView.evaluateJavascript("javascript:send_bluetooth_check()", new ValueCallback<String>() {
                        @Override
                        public void onReceiveValue(String value) {
                            //Log.i("onReceiveValue! " + value);
                            Log.d("Status", "Callback from send to web");
                        }
                    });
                }
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT && Build.VERSION.SDK_INT <= Build.VERSION_CODES.LOLLIPOP_MR1) {
                    mXWalkView.evaluateJavascript("javascript:send_bluetooth_check()", new ValueCallback<String>() {
                        @Override
                        public void onReceiveValue(String value) {
                            //Log.i("onReceiveValue! " + value);
                            Log.d("Status", "Callback from send to web");
                        }
                    });
                }*/
                //Toast.makeText(this, "Bluetooth is off. Please enable it!", Toast.LENGTH_LONG).show();
                Log.d("checkBluetoothStatus", "Bluetooth is off");
            }
        }
    }

    public void activateBluetoothNative(){
        BluetoothAdapter mBluetoothAdapter = BluetoothAdapter.getDefaultAdapter();
        mBluetoothAdapter.enable();
    }

    public void activateWifiNative(){
        startActivity(new Intent(Settings.ACTION_WIFI_SETTINGS));
    }

    private final BroadcastReceiver mReceiver = new BroadcastReceiver() {
        @Override
        public void onReceive(Context context, Intent intent) {
            final String action = intent.getAction();

            if (action.equals(BluetoothAdapter.ACTION_STATE_CHANGED)) {
                final int state = intent.getIntExtra(BluetoothAdapter.EXTRA_STATE,
                        BluetoothAdapter.ERROR);
                switch (state) {
                    case BluetoothAdapter.STATE_OFF:
                        Log.d("BluetoothAdapter", "Bluetooth off");
                        break;
                    case BluetoothAdapter.STATE_TURNING_OFF:
                        bluetoothTurnedOff = true;
                        Log.d("BluetoothAdapter", "Bluetooth turned off");
                        break;
                    case BluetoothAdapter.STATE_ON:
                        if(bluetoothTurnedOnAgain){
                            bluetoothTurnedOnAgain = false;
                            proximityManagerToRestart = true;
                        }
                        Log.d("BluetoothAdapter", "Bluetooth is on");
                        break;
                    case BluetoothAdapter.STATE_TURNING_ON:
                        if(bluetoothTurnedOff){
                            bluetoothTurnedOff = false;
                            bluetoothTurnedOnAgain = true;
                        }
                        Log.d("BluetoothAdapter", "Bluetooth is turned on");
                        break;
                }
            }
        }
    };

    @Override
    public void onBackPressed() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            myWebView.evaluateJavascript("javascript:back_button_pressed()", new ValueCallback<String>() {
                @Override
                public void onReceiveValue(String value) {
                    //Log.i("onReceiveValue! " + value);
                    Log.d("Status", "Callback from send to web");
                }
            });
        }
    }
}
