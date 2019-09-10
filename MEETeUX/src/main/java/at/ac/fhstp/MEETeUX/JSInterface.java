package at.ac.fhstp.MEETeUX;

import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.webkit.JavascriptInterface;
import android.webkit.ValueCallback;
import android.webkit.WebView;
import android.widget.Toast;

import com.kontakt.sdk.android.common.profile.IBeaconDevice;

import org.xwalk.core.XWalkView;

public class JSInterface extends AppCompatActivity {

    //private WebView mAppView;
    private MainActivity mainActivity;
    private WebView mAppView;

    public JSInterface(WebView appView, MainActivity mA) {
        this.mAppView = appView;
        this.mainActivity = mA;
    }

    /* calls to WebView */

    public void addItem(String name) {
        mAppView.loadUrl("javascript:addItem('" + name + "')");
    }


    public void setCurrentTriggerObject(String name) {
        mAppView.loadUrl("javascript:setCurrentTriggerObject('" + name + "')");
    }

    public IBeaconDevice getNearestBeacon(){
        IBeaconDevice nearestBeacon = mainActivity.nearestBeaconDetected();
        return nearestBeacon;
    }

    @JavascriptInterface
    public int getNearestBeaconMajor(){
        int nearestBeaconMajor = mainActivity.nearestBeaconMajorDetected();
        return nearestBeaconMajor;
    }

    @JavascriptInterface
    public int getNearestBeaconMinor(){
        int nearestBeaconMinor = mainActivity.nearestBeaconMinorDetected();
        return nearestBeaconMinor;
    }

    @JavascriptInterface
    public void update_location(){
        mainActivity.update_location();
    }


    @JavascriptInterface
    public void registerOD(){
        mainActivity.registerODNatve();
    }

    @JavascriptInterface
    public void saveToken(String message){
        mainActivity.saveToken(message);
    }

    @JavascriptInterface
    public void clearToken(){
        mAppView.post(new Runnable() {
            @Override
            public void run() {
                mainActivity.clearToken();
                mainActivity.clearLastBeacon();

                mAppView.evaluateJavascript("javascript:logout_success()", new ValueCallback<String>() {
                    @Override
                    public void onReceiveValue(String value) {
                        //Log.i("onReceiveValue! " + value);
                        //Log.d("Status","Callback from send to web");
                    }
                });
            }
        });
    }

    @JavascriptInterface
    public void getToken(){
        mAppView.post(new Runnable() {
            @Override
            public void run() {
                // String token = mainActivity.getToken();
                String newToken = mainActivity.getTokenAndDeviceInfosNative();
                mAppView.evaluateJavascript("javascript:send_token("+ newToken +")", new ValueCallback<String>() {
                    @Override
                    public void onReceiveValue(String value) {
                        //Log.i("onReceiveValue! " + value);
                        //Log.d("Status","Callback from send to web");
                    }
                });
            }
        });
    }

    @JavascriptInterface
    public void getLanguage(){
        mAppView.post(new Runnable() {
            @Override
            public void run() {
                String mlanguage = mainActivity.getLanguage();
                mAppView.evaluateJavascript("javascript:send_language("+ mlanguage +")", new ValueCallback<String>() {
                    @Override
                    public void onReceiveValue(String value) {
                        //Log.i("onReceiveValue! " + value);
                        //Log.d("Status","Callback from send to web");
                    }
                });
            }
        });
    }

    @JavascriptInterface
    public void getDeviceInfos(final String message){
        mAppView.post(new Runnable() {
            @Override
            public void run() {
                String deviceInfos = mainActivity.getDeviceInfosNative();
                switch (message){
                    case "login":
                        mAppView.evaluateJavascript("javascript:send_device_infos_login("+ deviceInfos +")", new ValueCallback<String>() {
                            @Override
                            public void onReceiveValue(String value) {
                                //Log.i("onReceiveValue! " + value);
                                //Log.d("Status","Callback from send to web");
                            }
                        });
                        break;

                    case "loginGuest":
                        mAppView.evaluateJavascript("javascript:send_device_infos_login_guest("+ deviceInfos +")", new ValueCallback<String>() {
                            @Override
                            public void onReceiveValue(String value) {
                                //Log.i("onReceiveValue! " + value);
                                //Log.d("Status","Callback from send to web");
                            }
                        });
                        break;

                    case "register":
                        mAppView.evaluateJavascript("javascript:send_device_infos_register("+ deviceInfos +")", new ValueCallback<String>() {
                            @Override
                            public void onReceiveValue(String value) {
                                //Log.i("onReceiveValue! " + value);
                                //Log.d("Status","Callback from send to web");
                            }
                        });
                        break;

                    case "credentialChange":
                        mAppView.evaluateJavascript("javascript:send_device_infos_credential_change("+ deviceInfos +")", new ValueCallback<String>() {
                            @Override
                            public void onReceiveValue(String value) {
                                //Log.i("onReceiveValue! " + value);
                                //Log.d("Status","Callback from send to web");
                            }
                        });
                        break;

                    case "delete":
                        mAppView.evaluateJavascript("javascript:send_device_infos_delete("+ deviceInfos +")", new ValueCallback<String>() {
                            @Override
                            public void onReceiveValue(String value) {
                                //Log.i("send_deviceinfos_delete","onReceiveValue " + value);
                                //Log.d("Status","Callback from send to web");
                            }
                        });
                        break;
                }
            }
        });
    }

    // triggers signal, when location is updated
    @JavascriptInterface
    public void triggerSignal(){
        //Log.d("Status","Trigger Signal");
        mainActivity.triggerSignalNative();
    }

    @JavascriptInterface
    public void getWifiStatusResult(String message){
        //Log.d("Status","WIFI Result");
        mainActivity.getWifiStatusResultNative(message);
    }

    @JavascriptInterface
    public void activateBluetoothCheck(){
        //Log.d("Status","Bluetooth Check");
        mAppView.post(new Runnable() {
            @Override
            public void run() {
                mainActivity.checkBluetoothStatus();
            }
        });
    }

    @JavascriptInterface
    public void activateLocationCheck(){
        //Log.d("Status","Bluetooth Check");
        mAppView.post(new Runnable() {
            @Override
            public void run() {
                mainActivity.checkForActivatedLocation();
            }
        });
    }

    @JavascriptInterface
    public void activateBluetooth(){
        //Log.d("Status","Activate Bluetooth");
        mainActivity.activateBluetoothNative();
    }

    @JavascriptInterface
    public void activateWifiSettings(){
        //Log.d("Status","Activate Bluetooth");
        mainActivity.activateWifiNative();
    }

    @JavascriptInterface
    public void  receiveWifiData(String message){
        mainActivity.checkWifiData(message);
        mAppView.post(new Runnable() {
            @Override
            public void run() {
                String isCorrect = mainActivity.isCorrectWifi;
                mAppView.evaluateJavascript("javascript:send_correct_wifi("+ isCorrect +")", new ValueCallback<String>() {
                    @Override
                    public void onReceiveValue(String value) {
                        //Log.i("onReceiveValue! " + value);
                        //Log.d("Status","Callback from send to web");
                    }
                });
            }
        });
    }

    @JavascriptInterface
    public void  statusWifi(){
        mAppView.post(new Runnable() {
            @Override
            public void run() {
                String isCorrect = mainActivity.isCorrectWifi;
                mAppView.evaluateJavascript("javascript:send_correct_wifi("+ isCorrect +")", new ValueCallback<String>() {
                    @Override
                    public void onReceiveValue(String value) {
                        //Log.i("onReceiveValue! " + value);
                        //Log.d("Status","Callback from send to web");
                    }
                });
            }
        });
    }

    @JavascriptInterface
    public void  statusBluetooth(){
        mainActivity.updateBluetoothStatus();
        mAppView.post(new Runnable() {
            @Override
            public void run() {
                String isCorrect = mainActivity.isCorrectBluetooth;
                mAppView.evaluateJavascript("javascript:send_correct_bluetooth("+ isCorrect +")", new ValueCallback<String>() {
                    @Override
                    public void onReceiveValue(String value) {
                        //Log.i("onReceiveValue! " + value);
                        //Log.d("Status","Callback from send to web");
                    }
                });
            }
        });
    }

    @JavascriptInterface
    public void  statusLocation(){
        mainActivity.updateLocationStatus();
        mAppView.post(new Runnable() {
            @Override
            public void run() {
                String isCorrect = mainActivity.isCorrectLocation;
                mAppView.evaluateJavascript("javascript:send_correct_location("+ isCorrect +")", new ValueCallback<String>() {
                    @Override
                    public void onReceiveValue(String value) {
                        //Log.i("onReceiveValue! " + value);
                        //Log.d("Status","Callback from send to web");
                    }
                });
            }
        });
    }

    @JavascriptInterface
    public void showBackgroundNotification(String message){
        mainActivity.showNotificationBackground(message);
    }

    @JavascriptInterface
    public void triggerAr(){
        mainActivity.launchImageTargets();
    }

    @JavascriptInterface
    public void changeBeacon(){
        //Log.d("Status","Change Beacon");
        mainActivity.changeBeacon();
    }

    @JavascriptInterface
    public void stopScanner(){
        mainActivity.stopScanner();
    }

    @JavascriptInterface
    public void restartScanner(){
        mainActivity.restartScanner();
    }

    @JavascriptInterface
    public void openWifiDialogNative(){ mainActivity.openWifiDialogNative();}

    // prints message from webview to Logcat
    @JavascriptInterface
    public void print(String message){
        //Log.d("WWW",message);
    }

    @JavascriptInterface
    public void displayUpdateMessage(){
        mainActivity.updateApp();
    }

    @JavascriptInterface
    public void sendPermissionCheck(){
        mainActivity.checkPermissions();
    }

    @JavascriptInterface
    public void  getAppVersion(){
        mAppView.post(new Runnable() {
            @Override
            public void run() {
            String mVERSION_GOD = mainActivity.VERSION_GOD;
            mAppView.evaluateJavascript("javascript:send_app_version('"+ mVERSION_GOD +"')", new ValueCallback<String>() {
                @Override
                public void onReceiveValue(String value) {
                //Log.i("onReceiveValue! " + value);
                //Log.d("Status","Callback from send to web");
                }
            });
            }
        });
    }
}