import {Component} from '@angular/core';
@Component({
  selector : 'my-app',
  template: `
  <div class="conatiner">
  <div class="row">
  <div class="col-md-6 col-md-offset-2">
  <h2>my Second angular js </h2>
  <!--loop for the task-->
  <div class="tasks" *ngFor="let currentTask of tasks">
  <h3>{{currentTask}}</h3><br/>
  </div>
  </div>
  </div>
  </div>
  `
});
export class Appcomponent{
  public tasks:Task=new Task ("washing clothes ",0);
}
export class Task {
  public done :boolean =false;
  constructor(public description :string,public id :number)
  {

  }
}
