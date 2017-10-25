import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var SMS: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    this.readListSMS();
    this.expectingSMS();
  }

  readListSMS(){    
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
  } 
    
  expectingSMS(){          
    if (SMS)SMS.startWatch(() => { 
      console.log('Esperando...'); 
    },Error => { 
      console.log('Fallo el inicio de la espera.'); 
    });      
    document.addEventListener('onSMSArrive', (e: any ) => { 
      var sms = e.data; 
      console.log({mensaje_entrante:sms});       
    }); 
  }

}
