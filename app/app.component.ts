import {Component} from '@angular/core';
import {Task} from './task.model';
@Component({
  selector : 'my-app',
  template: `
  <div class="conatiner">
  <div class="row">
  <div class="col-md-6 col-md-offset-2">
  <h2>my Second angular js </h2>
  <!--below are the child components-->
  <pies></pies>
  <task-list></task-list>
  <!--loop for the task-->
  <!--
  <div class="tasks" (click)="showDetails(currentTask)" *ngFor="let currentTask of tasks">
  //(click)="doStuff()" shows the event emitter for clicking which is the output binding
  <h3>{{currentTask.description}}</h3><br/>
  </div>
  <div class="row">
  -->
  <h3>Edit task</h3>
  <!--
  below shows only the input and not the output
  -->
  <h3>Task Description :{{selectedTask.description}}</h3>
  <h3>Task number : {{selectedTask.id}}</h3>
  <div *ngIf ="selectedTask">
  <!--*ngIf is a directive for dom the is used to hide and show-->
  <h2>Edit Task</h2>
  <div>
  <!-- the [(ngModel)] keyword below is used for two-way binding i.e both input and output-->
  <label>Enter the description :</label>
  <input [(ngModel)]="selectedTask.description">
  </div>
  <div >
  <label>Enter the Task Id:</label>
  <input [(ngModel)]="selectedTask.id">
  <!--Added the button that shows we are done with the when clicked -->
  <button (click)="FinishedEditing()">Done</button>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  `
})
//function for the dostuff()
/*doStuff(clickedTask : Task) {
  if(clickedTask.done == true){
    alert("you have already done task");
  }
  else{
    alert("you haven't don the work yet")
  }
} ;*/
//declared the word selectedTask to be of type Task and given the first task as the default
//we have set the task to null so us not to allow us to start editing when we load the app
export class AppComponent{
selectedTask : Task = null;
showDetails(clickedTask :Task){
  this.selectedTask =clickedTask;
}
//function for the clicked button
FinishedEditing(){
this.selectedTask = null;
}
}
