import {NgModule} from '@angular/core';
import {BrowserModule} from 'angular/platform-browser';
import {FormsModule} from 'angular/forms';
import {AppComponent} from './app.component';
import {PiesListComponent} from './pies-list.components';
@NgModule({
  import:[
  BrowserModule,
  FormsModule
],
declaration : [
  PiesListComponent,
  AppComponent,
],
bootstrap : [AppComponent]
})
export class AppModule{

}
