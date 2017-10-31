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
  results: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public smsService: SmsServiceProvider,
    public loadingCtrl: LoadingController) {
      this.results = [];
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
      this.results = listSMS;
      this.groupMessabesByAddress();

      loading.dismiss();
    })
  }

  selectedMessage(message) {
    console.log(message);
    this.navCtrl.push(SmsDetailsPage, {
      message: message
    });
  }

  groupMessabesByAddress() {
    let messages = this.results;
    let res = messages.reduce(function(res, currentValue) {
      if (res.indexOf(currentValue.address) === -1 ) {
        res.push(currentValue.address);
      }
      console.log(res);
      return res;
    }, []).map(function(address) {
      return {
        address: address,
        info: messages.filter(function(_el) {
          return _el.address === address;
        }).map(function(_el) { return _el; })
      }  
    });
    
    console.log(res);
    this.messages = res;
  }

}
