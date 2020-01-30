import { Component, OnInit } from '@angular/core';
import { AuctionItem } from './auction-item';

@Component({
  selector: 'ap-auctions-site',
  templateUrl: './auctions-site.component.html',
  styles: []
})
export class AuctionsSiteComponent implements OnInit {
  auctionItems: AuctionItem[] = [
    {
      id: 1,
      imageUrl: 'https://picsum.photos/id/3/200/200',
      title: 'iphone 3g',
      description: 'ajfon',
      price: 100
    },
    {
      id: 2,
      imageUrl: 'https://picsum.photos/id/2/200/200',
      title: 'samsung s5',
      description: 'samsung',
      price: 250
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
