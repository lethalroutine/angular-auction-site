import { Injectable } from '@angular/core';
import { AuctionItem } from './auctions-site/auction-item';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private itemsSubject = new BehaviorSubject<AuctionItem[]>([]);

  constructor() { }

  addItem(item: AuctionItem): void {
    const myAuctions = this.itemsSubject.getValue();
    myAuctions.push(item);
    this.itemsSubject.next(myAuctions);
  }

  getItems(): BehaviorSubject<AuctionItem[]> {
    return this.itemsSubject;
  }
}
