import { Component, Input } from '@angular/core';

@Component({
  selector: 'activity-list-property',
  templateUrl: './activity-list-property.component.html',
  styleUrls: ['./activity-list-property.component.css']
})
export class ActivityListPropertyComponent {
@Input() activity:any;
}
