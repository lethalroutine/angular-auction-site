import { Component, OnInit } from '@angular/core';
import { MenuItem } from './menu-item';

@Component({
  selector: 'ap-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  showMenu = false;
  menuItems: MenuItem[] = [
    {name: 'Aukcje', link: 'auctions'},
    {name: 'Promocje', link: 'promotions'},
    {name: 'Podpowiadamy', link: 'advices'},
  ];

  addAuctionItem: MenuItem = {name: 'Dodaj', link: 'add-auction'};
  cartItem: MenuItem = {name: 'Koszyk', link: 'cart'};

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
