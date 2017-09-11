import {Component} from '@angular/core';
@Component
({
  selector:'task-list',
  template:`
   <div class="row">
   <div class="tasked" *ngFor="let currentTask of tasks">
   <h3>{{currentTask.description}}</h3>
   <button class="btn btn-primary" (click)="showDetails(currentTask)">Edit</button>
   </div>
   `
})
export class TaskListComponent{
  public tasks:Task []= [
    new Task ("washing clothes ",0),
    new Task ("programming ",1),
    new Task ("listening to music ",2),
    new Task ("watching series",3),
  ];
}
export class Task{
  constructor(public description :string,public id :number){
    
  }
}
