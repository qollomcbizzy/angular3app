import {NgModule} from '@angular/core';
import {BrowserModule} from 'angular/platform-browser';
import {FormsModule} from 'angular/forms';
import {Appcomponent} from './app.component';
import {PiesListcomponent} from './pies-list.components';
@NgModule({
  import:[
  BrowserModule,
  FormsModule
],
declaration : [
  PiesListcomponent,
  Appcomponent,
],
bootstrap : [Appcomponent]
})
export class AppModule{

}
