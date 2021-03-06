import { NgModule } from '@angular/core';
import { EnvVariables } from './environment.token';
import { devVariables } from '../../../environments/development';
import { prodVariables } from '../../../environments/production';
import { IEnvironment } from "../../../environments/env-model";


declare const process: any; // Typescript compiler will complain without this

export function environmentFactory():IEnvironment {
  let env:IEnvironment = process.env.IONIC_ENV === 'prod' ? prodVariables : devVariables;
  //if(process.env.IONIC_ENV != 'prod') console.log('env->', env)
  if(process.env.NODE_ENV === 'prod') { env = prodVariables }
  console.log('env->', env)
  return env
}

@NgModule({
  providers: [
    {
      provide: EnvVariables,
      useFactory: environmentFactory
    }
  ]
})
export class EnvironmentsModule {}