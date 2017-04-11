/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   08-04-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 08-04-2017
 */

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { Items } from './items';
import { DeadlinePipe } from "../../pipes/deadline-pipe";
import { SortDescPipe } from "../../pipes/sortdesc-pipe";
import { DateFormatPipe } from "../../pipes/dateformat-pipe";

 import { NotifMock } from "../../providers/notifications-service/notif-mock";
 import { LocalNotifications } from '@ionic-native/local-notifications';

@NgModule({
  declarations: [
    Items,
    DeadlinePipe,
    SortDescPipe,
    DateFormatPipe
  ],
  imports: [
    IonicPageModule.forChild(Items)
  ],
  providers: [
    NotifMock,
    LocalNotifications
  ],
  exports: [
    Items
  ]
})
export class ItemsModule {}
