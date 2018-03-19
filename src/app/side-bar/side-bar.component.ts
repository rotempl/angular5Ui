import { Component, HostBinding, Input } from '@angular/core';
import { header, elements, logo } from '../../consts/sideBar';

@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  companyName:string = header;
  categories: any[] = elements;
  logo: string= logo;

  @HostBinding('class.is-open')
  @Input() isOpen: boolean;
}
