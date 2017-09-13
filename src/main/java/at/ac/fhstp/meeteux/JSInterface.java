package at.ac.fhstp.meeteux;

import android.support.v7.app.AppCompatActivity;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;

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

}