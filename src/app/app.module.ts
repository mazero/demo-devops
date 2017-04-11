/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   08-04-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 08-04-2017
 */

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TodosService } from '../providers/todos-service/todos-service';

import { EnvironmentsModule }  from './environment/environment.module';


const pages:Array<any> = [
  MyApp,
  HomePage
]
const providers:Array<any> = [
  StatusBar,
  SplashScreen,
  {provide: ErrorHandler, useClass: IonicErrorHandler},
  TodosService
];

const ionicAppConfig:Object = {
  tabsPlacement: 'top',
  mode: 'md'
};

@NgModule({
  declarations: [...pages],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, ionicAppConfig),
    HttpModule,
    EnvironmentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [...pages],
  providers
})
export class AppModule {}
