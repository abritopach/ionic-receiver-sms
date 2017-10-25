import { ToastController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { SMS } from '@ionic-native/sms';

//declare var SMS: any;

/*
  Generated class for the SmsServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SmsServiceProvider {

  constructor() {
    console.log('Hello SmsServiceProvider Provider');
  }
  
  readListSMS(){   

	/*
    let filter = { 
      box : 'inbox' , // 'inbox' (default), 'sent', 'draft' 
      indexFrom : 0 , // Start from index 0.
      maxCount : 10 , // Count of SMS to return each time.
    }; 
    if (SMS)SMS.listSMS(filter,(listSMS) => { 
      console.log("SMS" , listSMS); 
    },Error => { 
      console.log('Error list sms:' + Error); 
    }); 
	*/
  } 
    
  expectingSMS(){
	/*  
    if (SMS)SMS.startWatch(() => { 
      console.log('Esperando...'); 
    },Error => { 
      console.log('Fallo el inicio de la espera.'); 
    });      
    document.addEventListener('onSMSArrive', (e: any ) => { 
      var sms = e.data; 
      console.log({mensaje_entrante:sms});       
    }); 
	*/
  }
  
  sendTextMessage(number, message) {
    SMS.send(number, message).then((result) => {
      let successToast = this.toastCtrl.create({
        message: "Text message sent successfully! :)",
        duration: 3000
      })
      successToast.present();
    }, (error) => {
      let errorToast = this.toastCtrl.create({
        message: "Text message not sent. :(",
        duration: 3000
      })
      errorToast.present();
    });
 }

}
