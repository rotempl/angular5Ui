import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {

  @Output() toggle: EventEmitter<null> = new EventEmitter();
  @Input() isOpen: boolean;

  toggleSideBar(){
   this.toggle.emit();
  }
}
