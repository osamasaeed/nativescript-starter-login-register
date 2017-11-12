import { Injectable } from '@angular/core';
import * as application from "application";
import * as platform from "platform";
import * as colorModule from "tns-core-modules/color";
var Color = colorModule.Color;
declare var android: any;

@Injectable()
export class AppService {
  constructor() { 

  }
  android_getWindow(){
    if (application.android && platform.device.sdkVersion >= "21") {
      console.log("getting console.log");
    const window = application.android.startActivity.getWindow();
      return window;
    }   
  }
  android_setStatusBarTransparant(){
    let View = android.view.View;
    let window = this.android_getWindow() || {};
      // setting status bar color (0x000000) transparant 
      window.setStatusBarColor(0x000000);
      let decorView = window.getDecorView();
      decorView.setSystemUiVisibility(
        View.SYSTEM_UI_FLAG_LAYOUT_STABLE
        | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
        | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
        // | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION // hide nav bar
        // | View.SYSTEM_UI_FLAG_FULLSCREEN // hide status bar
        | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY
      );
  }
  android_setNavigationBarTransparant(){
    let window = this.android_getWindow();
      // setting status bar color (0x000000) transparant 
      window.setNavigationBarColor(0x000000);
  }
  android_setStatusBarColor(color){
    let window = this.android_getWindow();
      window.setStatusBarColor(new Color(color).android);      
  }
  android_setStatusBarRGBAColor(a, r, g, b){
    let window = this.android_getWindow();
      window.setStatusBarColor(new Color(a,r,g,b).android);            
  }
  android_setNavigationBarColor(color){
    let window = this.android_getWindow() || {};
      window.setNavigationBarColor(new Color(color).android);      
  }
  android_setNavigationBarRGBAColor(a:number,r:number,g:number,b:number){
    let window = this.android_getWindow();
      window.setNavigationBarColor(new Color(a,r,g,b).android);            
  }
  android_setStyle(){
    this.android_setNavigationBarRGBAColor(50, 50, 50, 50);
    this.android_setStatusBarRGBAColor(50, 50, 50, 50);
  }
}
