 import { Injectable } from '@angular/core';
 import { Platform } from 'ionic-angular';
 import { LocalNotifications } from '@ionic-native/local-notifications';
 import { INotifItem } from "../../providers/notifications-service/notif-model";

 import { AlertController } from 'ionic-angular';

 @Injectable()
 export class NotifMock  {

   constructor(
     public platform:Platform,
     public localNotifications: LocalNotifications,
     public alertCtrl: AlertController
   ){
   }
   schedule(notif:INotifItem):void {
     this.platform.ready().then(() => {
       // Okay, so the platform is ready and our plugins are available.
       // Here you can do any higher level native things you might need.
       //console.log('platform-> ',this.platform.is('core'))
       if (this.platform.is('core')) {
        let alert = this.alertCtrl.create({
            title: 'New Friend!',
            subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
            buttons: ['OK']
          });
          alert.present();
       }
       else {
         this.localNotifications.schedule(notif)
       }
     });

   }
 }