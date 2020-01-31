import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { AuctionItem } from '../auctions-site/auction-item';

@Component({
  selector: 'ap-cart-site',
  templateUrl: './cart-site.component.html',
  styleUrls: ['./cart-site.component.css']
})
export class CartSiteComponent implements OnInit {

  itemsInCart: AuctionItem[] = [];
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.getItems().subscribe((items: AuctionItem[]) => this.itemsInCart = items);
  }

}
