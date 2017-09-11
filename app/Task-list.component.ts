import {Component,Input,Output,EventEmitter} from '@angular/core';
import {Task} from './task.model';
@Component
({
  selector:'task-list',
  template:`
   <div class="row">
   <div class="tasked" *ngFor="let currentTask of childTaskList">
   <h3>{{currentTask.description}}</h3>
   <button class="btn btn-primary" (click)="EditButtonClicked(currentTask)">Edit</button>
   </div>
   `
})
export class TaskListComponent{
  @Input () childTaskList :Task[];
  @Output () clickSender = new EventEmitter();
}
