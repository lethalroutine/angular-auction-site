import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ap-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  showMenu = false;

  constructor() { }

  ngOnInit() {
  }

  handleMenuToggle() {
    console.log('kliknelo sie');
    if (this.showMenu) {
      this.showMenu = false;
    } else {
      this.showMenu = true;
    }

  }
}
