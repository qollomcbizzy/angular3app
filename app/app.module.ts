import {NgModule} from '@angular/core';
import {BrowserModule} from 'angular/platform-browser';
import {FormsModule} from 'angular/forms';
import {Appcomponent} from './app.component';
@NgModule({
  import:[
  BrowserModule,
  FormsModule
],
declaration : [Appcomponent],
bootstrap : [Appcomponent]
})
export class AppModule{
  
}
