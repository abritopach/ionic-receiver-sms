import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

import { AndroidPermissions } from '@ionic-native/android-permissions';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,  
    public androidPermissions:AndroidPermissions) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
	  let isApp = (!document.URL.startsWith('http') || document.URL.startsWith('http://localhost:8080'));
	  if (isApp) this.requestSMSPermissions();
    });
  }

  requestSMSPermissions(){
    this .androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_SMS)
    .then( success => console.log ( 'Permiso concebido.' ), 
    err => this.androidPermissions.requestPermission( this.androidPermissions.PERMISSION.READ_SMS) 
    ); 

    this .androidPermissions.requestPermissions ([ this .androidPermissions.PERMISSION.READ_SMS]);
  }
}

