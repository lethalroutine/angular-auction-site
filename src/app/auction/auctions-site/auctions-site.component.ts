import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuctionItem } from './auction-item';
import { AuctionsService } from './../auctions.service';
import { Subscription } from 'rxjs';
import { CartService } from './../cart.service';

@Component({
  selector: 'ap-auctions-site',
  templateUrl: './auctions-site.component.html',
  styles: []
})
export class AuctionsSiteComponent implements OnInit, OnDestroy {
  auctionItems: AuctionItem[] = [];
  private subscription: Subscription;
  errorMessage = '';

  constructor(private auctionService: AuctionsService, private cartService: CartService) {
  }

  ngOnInit() {
    this.subscription = this.auctionService.getAuctionItems().subscribe( (auctions: AuctionItem[]) => {
      this.auctionItems = auctions;
    },
    (error: Error) => {
      this.errorMessage = error.message;
    }
    );
  }

  ngOnDestroy(): void {
    console.log('method not implemented');
    this.subscription.unsubscribe();
  }

  handleAddToCart(auction: AuctionItem) {
    this.cartService.addItem(auction);
  }
}
