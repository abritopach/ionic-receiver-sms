import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SmsListPage } from './sms-list';

@NgModule({
  declarations: [
    SmsListPage,
  ],
  imports: [
    IonicPageModule.forChild(SmsListPage),
  ],
})
export class SmsListPageModule {}
