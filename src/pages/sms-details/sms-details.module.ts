import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SmsDetailsPage } from './sms-details';

@NgModule({
  declarations: [
    SmsDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(SmsDetailsPage),
  ],
})
export class SmsDetailsPageModule {}
