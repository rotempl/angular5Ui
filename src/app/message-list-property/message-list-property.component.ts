import { Component, Input } from '@angular/core';

@Component({
  selector: 'message-list-property',
  templateUrl: './message-list-property.component.html',
  styleUrls: ['./message-list-property.component.css']
})
export class MessageListPropertyComponent{

  @Input() message:any;
}
