import { Component } from '@angular/core';
import {elements} from '../../consts/tasks';
@Component({
  selector: 'tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent{

tasks: any[]= elements;
}
