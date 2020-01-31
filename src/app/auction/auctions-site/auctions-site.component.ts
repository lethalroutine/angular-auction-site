import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuctionItem } from './auction-item';
import { AuctionsService } from './../auctions.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ap-auctions-site',
  templateUrl: './auctions-site.component.html',
  styles: []
})
export class AuctionsSiteComponent implements OnInit, OnDestroy {
  auctionItems: AuctionItem[] = [];
  private subscription: Subscription;
  errorMessage = '';

  constructor(private auctionService: AuctionsService) {
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
}
