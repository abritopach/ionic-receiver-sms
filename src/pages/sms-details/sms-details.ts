import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SmsDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sms-details',
  templateUrl: 'sms-details.html',
})
export class SmsDetailsPage {

  messages: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.messages = this.navParams.get('message');
    console.log('constructor SmsDetailsPage');
    console.log(this.messages);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SmsDetailsPage');
  }

}
