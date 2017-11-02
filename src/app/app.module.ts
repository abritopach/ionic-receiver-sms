import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SmsListPage } from '../pages/sms-list/sms-list';
import { SmsDetailsPage } from '../pages/sms-details/sms-details'

import { AndroidPermissions } from '@ionic-native/android-permissions';
import { SmsServiceProvider } from '../providers/sms-service/sms-service';

import { TextMaskModule } from 'angular2-text-mask';

import { SMS } from '@ionic-native/sms';

import { FormatDatePipe } from '../pipes/format-date/format-date';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SmsListPage,
    SmsDetailsPage,
    FormatDatePipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    TextMaskModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SmsListPage,
    SmsDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AndroidPermissions,
    SmsServiceProvider,
    SMS
  ]
})
export class AppModule {}
