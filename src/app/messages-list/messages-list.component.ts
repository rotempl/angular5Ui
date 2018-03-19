import { Component } from '@angular/core';
import {elements} from '../../consts/messages';
@Component({
  selector: 'messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.css']
})
export class MessagesListComponent{
  messages: any[]= elements
}
