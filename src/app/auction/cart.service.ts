import { Injectable } from '@angular/core';
import { AuctionItem } from './auctions-site/auction-item';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

  getItems(): Observable<AuctionItem[]> {
    return this.itemsSubject.asObservable();
  }

  countItems(): Observable<number> {
    return this.itemsSubject.pipe(map(auctions => auctions.length));
  }
}
