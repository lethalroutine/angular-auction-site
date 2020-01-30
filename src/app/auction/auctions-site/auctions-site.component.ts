import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuctionItem } from './auction-item';
import { AuctionsService } from './../auctions.service';

@Component({
  selector: 'ap-auctions-site',
  templateUrl: './auctions-site.component.html',
  styles: []
})
export class AuctionsSiteComponent implements OnInit, OnDestroy {
  auctionItems: AuctionItem[] = [];

  constructor(private auctionService: AuctionsService) {
  }

  ngOnInit() {
    console.log('hello auction sites component');
    this.auctionItems = this.auctionService.getAuctionItems();
  }

  ngOnDestroy(): void {
    console.log('method not implemented');
  }
}
