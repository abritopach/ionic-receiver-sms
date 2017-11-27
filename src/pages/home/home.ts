import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { SmsServiceProvider } from '../../providers/sms-service/sms-service';

import { SmsListPage } from '../sms-list/sms-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  isApp: boolean;
  masks: any;
  
  text = {
    "number": "", 
    "message": "",
  };

  countNewSMSs = 0;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public smsService: SmsServiceProvider) {
  
    this.masks = {
      phoneNumber: ['(', '+', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/],
      cardNumber: [/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
      cardExpiry: [/[0-1]/, /\d/, '/', /[1-2]/, /\d/],
      orderCode: [/[a-zA-z]/, ':', /\d/, /\d/, /\d/, /\d/]
    };
	  this.isApp = (!document.URL.startsWith('http') || document.URL.startsWith('http://localhost:8080'));
	  if (this.isApp) {
      this.smsService.waitingForSMS()
      .then(sms => {
        this.countNewSMSs += 1;
      })
	  }
	  else {
		  console.log("Web Browser.");
		  this.showAlert();
	  }
  }
  
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Error!',
      subTitle: 'To test the APP use a mobile device.',
      buttons: ['OK']
    });
    alert.present();
  }
  
  sendTextMessage() {
    // Using nativa ionic SMS.
    //this.smsService.sendTextMessage(this.text.number, this.text.message);
    // Using cordova-sms-plugin.
    this.smsService.sendSMS(this.text.number, this.text.message);
  }

  onClickSMSList() {
    //console.log("onClickSMSList");
    this.countNewSMSs = 0;
    this.navCtrl.push(SmsListPage);
  }

  onChangePhone() {
    console.log(this.text.number);
  }

  onClickMessage() {
    //console.log("onClickMessage");
    this.text.number = this.text.number.replace("_", "");
    //console.log(this.text.number);
  }

  

}
