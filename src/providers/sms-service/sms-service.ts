import { ToastController, Events } from 'ionic-angular';
import { Injectable } from '@angular/core';
//import { SMS } from '@ionic-native/sms';

declare var SMS: any;

/*
  Generated class for the SmsServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SmsServiceProvider {

  constructor(public toastCtrl: ToastController/*, public sms: SMS*/, public events: Events) {
    console.log('Hello SmsServiceProvider Provider');
  }

  // http://www.programmingworldtech.com/2017/09/ionic-3-cordova-read-sms-plugin.html

  sendSMS(number, message) {
    /*
    SMS.sendSMS(number, message => { 
      console.log("SMS sent."); 
    },Error => { 
      console.log('Error sending SMS.'); 
    });
    */

    SMS.sendSMS(number, message,function(){
      console.log("SMS sent."); 
     }, function(e){
      console.log('Error sending SMS.'); 
     });
  }
  
  readListSMS() {  
    console.log("readListSMS."); 
    let filter = { 
      box : 'inbox' , // 'inbox' (default), 'sent', 'draft' 
      indexFrom : 0 , // Start from index 0.
      maxCount : 20 , // Count of SMS to return each time.
    }; 
    return new Promise((resolve, reject) => {
      if (SMS)SMS.listSMS(filter,(listSMS) => { 
        console.log("SMS" , listSMS); 
        resolve(listSMS);
      },Error => { 
        console.log('Error list sms:' + Error); 
        reject(Error);
      }); 
    });
  } 
    
  waitingForSMS() {
    console.log("waitingForSMS");
    return new Promise((resolve, reject) => {
      if (SMS)SMS.startWatch(() => { 
        console.log('Waiting for SMS...'); 
      },Error => { 
        console.log('Error waiting for SMS.'); 
      });      
      document.addEventListener('onSMSArrive', (e: any ) => { 
        var sms = e.data; 
        console.log({mensaje_entrante:sms});    
        this.events.publish('onSMSArrive', sms);   
        resolve(sms);
      }); 
    });
    
  }
  
  /*
  sendTextMessage(number, message) {
    console.log("Number: " + number);
    console.log("Message: " + message);
    this.sms.send(number, message).then((result) => {
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
 */

}
