package at.ac.fhstp.MEETeUX;

import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.webkit.JavascriptInterface;
import android.webkit.ValueCallback;
import android.webkit.WebView;
import android.widget.Toast;

import com.kontakt.sdk.android.common.profile.IBeaconDevice;

public class JSInterface extends AppCompatActivity {

    private WebView mAppView;
    private UnityPlayerActivity mainActivity;


    public JSInterface(WebView appView, UnityPlayerActivity mA) {
        this.mAppView = appView;
        this.mainActivity = mA;
    }

    @JavascriptInterface
    public void switchToUnity()
    {
        mainActivity.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                mainActivity.viewSwitcher.showNext();
            }
        });
    }

    @JavascriptInterface
    public void forwardToUnity(String methodname, String command) //type is "monster" or "item"
    {
        mainActivity.myUnityPlayer.UnitySendMessage("ExternalCallManager", methodname, command);
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
    public void getDeviceInfos(){
        mAppView.post(new Runnable() {
            @Override
            public void run() {
                String deviceInfos = mainActivity.getDeviceInfosNative();
                mAppView.evaluateJavascript("javascript:send_device_infos("+ deviceInfos +")", new ValueCallback<String>() {
                    @Override
                    public void onReceiveValue(String value) {
                        //Log.i("onReceiveValue! " + value);
                        Log.d("Status","Callback from send to web");
                    }
                });
            }
        });
    }

    // triggers signal, when location is updated
    @JavascriptInterface
    public void triggerSignal(){
        Log.d("Status","Trigger Signal");
        mainActivity.triggerSignalNative();
    }

    // prints message from webview to Logcat
    @JavascriptInterface
    public void print(String message){
        Log.d("WWW",message);
    }

   /* @JavascriptInterface
    public void run(final String scriptSrc){
        mAppView.post(new Runnable() {
            @Override
            public void run() {
                mAppView.loadUrl("javascript:" + scriptSrc);
            }
        });
    }*/



}