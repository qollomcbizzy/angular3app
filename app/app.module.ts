import {NgModule} from '@angular/core';
import {BrowserModule} from 'angular/platform-browser';
import {FormsModule} from 'angular/forms';
import {AppComponent} from './app.component';
import {PiesListComponent} from './pies-list.components';
import {TaskListComponent} from './Task-list.component'
@NgModule({
  import:[
  BrowserModule,
  FormsModule
],
declaration : [
  AppComponent,
  PiesListComponent,
  TaskListComponent,
],
bootstrap : [AppComponent]
})
export class AppModule{

}
