import { Component, Input } from '@angular/core';

@Component({
  selector: 'task-list-property',
  templateUrl: './task-list-property.component.html',
  styleUrls: ['./task-list-property.component.css']
})
export class TaskListPropertyComponent {

  @Input() task:any;
} 
