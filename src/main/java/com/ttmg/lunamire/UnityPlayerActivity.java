package com.ttmg.lunamire;

import com.unity3d.player.*;
import android.app.Activity;
import android.content.res.Configuration;
import android.graphics.PixelFormat;
import android.os.Bundle;
import android.util.Log;
import android.view.KeyEvent;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;
import android.view.Window;
import android.view.WindowManager;
import android.webkit.ConsoleMessage;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.widget.ViewSwitcher;


public class UnityPlayerActivity extends Activity
{
	public static UnityPlayer myUnityPlayer;
	protected UnityPlayer mUnityPlayer; // don't change the name of this variable; referenced from native code
	public ViewSwitcher viewSwitcher;
	static WebView myWebView;
	static UnityPlayerActivity mySelf;
	static JSInterface myJSInterface;


	public static void takeItem(final String name) {
		mySelf.runOnUiThread(new Runnable() {
			@Override
			public void run() {
				myJSInterface.addItem(name);
			}
		});
	}
	public static void openInventar() {
		mySelf.runOnUiThread(new Runnable() {
		   @Override
		   public void run() {
			   mySelf.viewSwitcher.showPrevious();
		   }
	   	});
	}
	public static void setCurrentTriggerObject(final String name) {
		myJSInterface.setCurrentTriggerObject(name);
	}
	// Setup activity layout
	@Override protected void onCreate (Bundle savedInstanceState)
	{
		requestWindowFeature(Window.FEATURE_NO_TITLE);
		super.onCreate(savedInstanceState);
		mySelf = this;
		mUnityPlayer = new UnityPlayer(this);
		myUnityPlayer = this.mUnityPlayer;
			this.setContentView(R.layout.view_switch);

		viewSwitcher = (ViewSwitcher) findViewById(R.id.viewSwitch);
		viewSwitcher.addView(this.mUnityPlayer);
		myWebView = (WebView) findViewById(R.id.webView);

		WebSettings webSettings = myWebView.getSettings();
		webSettings.setJavaScriptEnabled(true);
		webSettings.setAppCacheEnabled(false);
		webSettings.setDatabaseEnabled(true);
		webSettings.setDomStorageEnabled(true);
		webSettings.setJavaScriptCanOpenWindowsAutomatically(true);
		webSettings.setMediaPlaybackRequiresUserGesture(false);
		myWebView.setWebChromeClient(new WebChromeClient() {
			public boolean onConsoleMessage(ConsoleMessage cm) {
				Log.d("MyApplication", cm.message() + " -- From line "
						+ cm.lineNumber() + " of "
						+ cm.sourceId());
				return true;
			}
		});
		//myWebView.getSettings().setMediaPlaybackRequiresUserGesture(false);
		myJSInterface = new JSInterface(myWebView, this);
		myWebView.addJavascriptInterface(myJSInterface, "LunamireAndroidAppRoot");
		myWebView.loadUrl("file:///android_asset/inventar/inventar.html");
		((ViewGroup)super.findViewById(android.R.id.content)).removeView(this.mUnityPlayer);

		getWindow().setFormat(PixelFormat.RGBX_8888); // <--- This makes xperia play happy

		//setContentView(mUnityPlayer);
		mUnityPlayer.requestFocus();
	}

	// Quit Unity
	@Override protected void onDestroy ()
	{
		mUnityPlayer.quit();
		super.onDestroy();
	}

	// Pause Unity
	@Override protected void onPause()
	{
		super.onPause();
		mUnityPlayer.pause();
	}

	// Resume Unity
	@Override protected void onResume()
	{
		super.onResume();
		mUnityPlayer.resume();
	}

	// This ensures the layout will be correct.
	@Override public void onConfigurationChanged(Configuration newConfig)
	{
		super.onConfigurationChanged(newConfig);
		mUnityPlayer.configurationChanged(newConfig);
	}

	// Notify Unity of the focus change.
	@Override public void onWindowFocusChanged(boolean hasFocus)
	{
		super.onWindowFocusChanged(hasFocus);
		mUnityPlayer.windowFocusChanged(hasFocus);
	}

	// For some reason the multiple keyevent type is not supported by the ndk.
	// Force event injection by overriding dispatchKeyEvent().
	/* @Override public boolean dispatchKeyEvent(KeyEvent event)
	{
		if (event.getAction() == KeyEvent.ACTION_MULTIPLE)
			return mUnityPlayer.injectEvent(event);
		return super.dispatchKeyEvent(event);
	} */

/*	// Pass any events not handled by (unfocused) views straight to UnityPlayer
	@Override public boolean onKeyUp(int keyCode, KeyEvent event)     { return mUnityPlayer.injectEvent(event); }
	@Override public boolean onKeyDown(int keyCode, KeyEvent event)   { return mUnityPlayer.injectEvent(event); }
	@Override public boolean onTouchEvent(MotionEvent event)          { return mUnityPlayer.injectEvent(event); }
	// API12
	public boolean onGenericMotionEvent(MotionEvent event)  { return mUnityPlayer.injectEvent(event); }*/
}
