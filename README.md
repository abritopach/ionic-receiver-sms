# Ionic-Receiver-Sms

Sample project that attempts to simulate the behavior of the mobile device's message application.

This sample project shows you how to:

* Send SMS using @ionic-native/sms and cordova-sms-plugin (Uncomment code in sms-service provider).
* Using [cordova-plugin-sms](https://github.com/floatinghotpot/cordova-plugin-sms)
    * Send SMS.
    * Read and show user list SMS from inbox.
    * Show SMS details.
    * Watch for SMS arrive.
    * Update SMS list when sms arrive.
* Using [angular2-text-mask](https://github.com/text-mask/text-mask/tree/master/angular2) plugin to apply mask to phone input.

## Running

Before you go through this example, you should have at least a basic understanding of Ionic concepts. You must also already have Ionic installed on your machine.

* Test in localhost:

To run it, cd into `ionic-receiver-sms` and run:

```bash
npm install
ionic serve
```

* Test in Android: 

```bash
ionic cordova add platform android
ionic cordova run android
```

* Test in iOS: 

```bash
ionic cordova add platform ios
ionic cordova run ios
```

## Requirements

* [Node.js](http://nodejs.org/)
* [Ionic Cordova](https://ionicframework.com/docs/intro/installation/)

## License
   
The MIT License (MIT) Copyright (c)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
   
Original work Copyright (c) 2017 Adrián Brito


