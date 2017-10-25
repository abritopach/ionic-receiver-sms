import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { SmsServiceProvider } from '../../providers/sms-service/sms-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  text = {
    "number": "", 
    "message": "",
  };

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public smsService: SmsServiceProvider) {
	let isApp = (!document.URL.startsWith('http') || document.URL.startsWith('http://localhost:8080'));
	if (isApp) {
		this.smsService.readListSMS();
		this.smsService.expectingSMS();
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
	this.smsService.sendTextMessage(this.text.number, this.text.message);
  }

  

}
