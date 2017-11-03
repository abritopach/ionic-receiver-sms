import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import * as moment from 'moment';

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
    //console.log('constructor SmsDetailsPage');
    //console.log(this.messages);
    this.groupMessabesByDate();
    this.removeDuplicates();
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad SmsDetailsPage');
  }

  groupMessabesByDate() {
    let messages = this.messages.info;
    //console.log("groupMessagesByDate");
    //console.log(messages);
    let res = messages.reduce(function(res, currentValue) {
      if (res.indexOf(currentValue.date) === -1 ) {
        res.push(currentValue.date);
      }
      //console.log(res);
      return res;
    }, []).map(function(date) {
      return {
        date: moment(date).format("DD/MM/YYYY"),
        info: messages.filter(function(_el) {
          return moment(_el.date).isSame(moment(date), 'day');
        }).map(function(_el) { return _el; })
      }  
    });
    
    //console.log(res);
    this.messages = res;
  }

  removeDuplicates() {
    let noDupeObj = {} //Create an associative array. It will not accept duplicate keys.
    for (let i = 0, n = this.messages.length; i < n; i++) {
       //Store each object as a variable. This helps with clarity in the next line.
      var item = this.messages[i];
      // This is the critical step.
      // Here, you create an object within the associative array that has a key composed of the two values 
      // from the original object. 
      // Since the associative array will not allow duplicate keys, and the keys are determined by the 
      // content, then all duplicate content are removed. 
      // The value assigned to each key is the original object which is along for the ride and used 
      // to reconstruct the list in the next step.
      noDupeObj[item.date] = item; 
    }

    //Recontructs the list with only the unique objects left in the doDupeObj associative array.
    let index = 0;
    let uniqueMessages = [];
    for (let item in noDupeObj) {
      uniqueMessages[index++] = noDupeObj[item]; //Populate the array with the values from the noDupeObj.
    }

    this.messages = uniqueMessages;
    //console.log(this.messages);
  }

}
