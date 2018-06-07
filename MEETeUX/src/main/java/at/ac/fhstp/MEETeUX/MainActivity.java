package at.ac.fhstp.MEETeUX;

/**
 * Created by kblumenstein on 06.03.18.
 */


import android.Manifest;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.content.res.Configuration;
import android.graphics.PixelFormat;
import android.media.Ringtone;
import android.media.RingtoneManager;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Vibrator;
import android.preference.PreferenceManager;
import android.provider.Settings;
import android.util.Log;
import android.view.KeyEvent;
import android.view.MotionEvent;
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
import com.unity3d.player.UnityPlayer;

import org.altbeacon.beacon.BeaconManager;
import org.altbeacon.beacon.powersave.BackgroundPowerSaver;
import org.json.JSONException;
import org.json.JSONObject;

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

    public static UnityPlayer myUnityPlayer;
    public ViewSwitcher viewSwitcher;

    static WebView myWebView;
    static MainActivity mySelf;
    static JSInterface myJSInterface;

    IBeaconDevice[] beaconItems;
    IBeaconDevice nearestBeacon;
    int nearestBeaconMinor;
    int nearestBeaconMajor;

    Uri notification;
    Ringtone r;

    String nearestBeaconInfos;

    // Setup activity layout
    @Override protected void onCreate(Bundle savedInstanceState)
    {
        requestWindowFeature(Window.FEATURE_NO_TITLE);
        super.onCreate(savedInstanceState);

        mUnityPlayer = new UnityPlayer(this);
        setContentView(mUnityPlayer);
        mUnityPlayer.requestFocus();


        setContentView(R.layout.view_switch);
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
        mUnityPlayer = new UnityPlayer(this);
        myUnityPlayer = this.mUnityPlayer;
        this.setContentView(R.layout.view_switch);

        viewSwitcher = (ViewSwitcher) findViewById(R.id.viewSwitch);
        viewSwitcher.addView(this.mUnityPlayer);
        myWebView = (WebView) findViewById(R.id.webView);

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
            myWebView.setWebContentsDebuggingEnabled(true);
        }

        WebSettings webSettings = myWebView.getSettings();
        webSettings.setJavaScriptEnabled(true);
        webSettings.setAppCacheEnabled(false);
        webSettings.setDatabaseEnabled(true);
        webSettings.setDomStorageEnabled(true);
        webSettings.setJavaScriptCanOpenWindowsAutomatically(true);
        //webSettings.setMediaPlaybackRequiresUserGesture(false);

        myJSInterface = new JSInterface(myWebView, this);
        myWebView.addJavascriptInterface(myJSInterface, "MEETeUXAndroidAppRoot");
        myWebView.loadUrl("file:///android_asset/www/index.html");
        ((ViewGroup)super.findViewById(android.R.id.content)).removeView(this.mUnityPlayer);

        getWindow().setFormat(PixelFormat.RGBX_8888); // <--- This makes xperia play happy

        //setContentView(mUnityPlayer);
        mUnityPlayer.requestFocus();

        // Setup sound for trigger location change
        notification = RingtoneManager.getDefaultUri(RingtoneManager.TYPE_NOTIFICATION);
        r = RingtoneManager.getRingtone(getApplicationContext(), notification);
        clearLastBeacon();
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

    // Button onClick
    public void switchToUnity(View v)
    {
        mySelf.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                mySelf.viewSwitcher.showPrevious();
            }
        });
        myUnityPlayer.UnitySendMessage("ExternalCallManager", "calledFromNative", "this is the message");
    }

    public static void backToNative() {
        Log.i("Status", "Native Called");
        mySelf.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                mySelf.viewSwitcher.showPrevious();
            }
        });
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
                text.append('\n');
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

    public void showUnityView(){
        mySelf.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                mySelf.viewSwitcher.showPrevious();
            }
        });
        myUnityPlayer.UnitySendMessage("ExternalCallManager", "calledFromNative", "this is the message");
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
        if((lastBeaconMajor != nearestBeaconMajor && lastBeaconMinor != nearestBeaconMinor) || (lastBeaconMajor != nearestBeaconMajor && lastBeaconMinor == nearestBeaconMinor) || (lastBeaconMajor == nearestBeaconMajor && lastBeaconMinor != nearestBeaconMinor)){
            mySelf.runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    SharedPreferences sp = PreferenceManager.getDefaultSharedPreferences(getApplicationContext());
                    SharedPreferences.Editor ed = sp.edit();
                    ed.putInt("LastBeaconMinor", nearestBeaconMinor);
                    ed.putInt("LastBeaconMajor", nearestBeaconMajor);
                    ed.apply();
                    myWebView.evaluateJavascript("javascript:update_location("+ nearestBeaconInfos +")", new ValueCallback<String>() {
                        @Override
                        public void onReceiveValue(String value) {
                            //Log.i("onReceiveValue! " + value);
                            Log.d("CheckReceive","Es ist was passiert");
                        }
                    });
                }
            });
        }else {
            Log.d("update_location", "No new beacon = no update!");
        }


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

    /***************
     *
     *  Overrides for Beacon Manager
     *
     *
     */

    @Override
    protected void onStart() {
        super.onStart();
    }

    @Override
    protected void onStop() {
        //Log.i("Sample", "Stop scanning");
        //proximityManager.stopScanning();
        super.onStop();
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
