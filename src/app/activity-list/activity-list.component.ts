import { Component } from '@angular/core';
import {elements} from '../../consts/activity';
@Component({
  selector: 'activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent{
activities: any[]= elements;
}
