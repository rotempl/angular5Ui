import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sideBarIsOpened = false;
  pageClass: string = 'menuClose';

  toggleSideBar(shouldOpen: boolean) {
    this.sideBarIsOpened = !this.sideBarIsOpened;
    this.pageClass === 'menuClose'? this.pageClass='menuOpen' : this.pageClass='menuClose'
  }
}
