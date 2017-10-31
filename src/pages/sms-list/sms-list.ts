import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { SmsServiceProvider } from '../../providers/sms-service/sms-service';

import { SmsDetailsPage } from '../sms-details/sms-details';

/**
 * Generated class for the SmsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sms-list',
  templateUrl: 'sms-list.html',
})
export class SmsListPage {

  messages: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public smsService: SmsServiceProvider,
    public loadingCtrl: LoadingController) {
      this.messages = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SmsListPage');

    let loading = this.loadingCtrl.create({
      content: "Loading SMS..."
    });

    this.smsService.readListSMS()
    .then(listSMS => {
      console.log(listSMS);
      this.messages = listSMS;
      loading.dismiss();
    })
  }

  selectedMessage(message) {
    console.log(message);
    this.navCtrl.push(SmsDetailsPage);
  }

}
