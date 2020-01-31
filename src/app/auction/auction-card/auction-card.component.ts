import { Component, OnInit, Input } from '@angular/core';
import { AuctionItem } from './../auctions-site/auction-item';
import { CartService } from './../cart.service';

@Component({
  selector: 'ap-auction-card',
  template: `
  <div class="card">
  <div class="card-header">
    {{ auction.title }}
    <img [src]='auction.imageUrl' class="card-img">
  </div>
  <div class="card-body">
    <p class="card-text">{{ auction.description }}</p>
    <div class="d-flex justify-content-between">
      <strong>{{ auction.price }} zł</strong>
      <button class="btn btn-primary" (click)="addToCart()">
        <i class="fa fa-cart-plus"></i>
      </button>
    </div>
  </div>
</div>
  `,
  styles: []
})
export class AuctionCardComponent implements OnInit {
  @Input() auction: AuctionItem;

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }
  addToCart() {
    this.cartService.addItem(this.auction);
  }

}
