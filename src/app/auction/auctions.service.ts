import { Injectable } from '@angular/core';
import { AuctionItem } from './auctions-site/auction-item';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuctionsService {
  constructor(private httpService: HttpClient) { }

  getAuctionItems(): Observable<AuctionItem[]> {
    return this.httpService.get<AuctionItem[]>('http://localhost:3000/auctions');
  }

  addAuctionItem(auction: AuctionItem): Observable<AuctionItem> {
    return this.httpService.post<AuctionItem>('http://localhost:3000/auctions', auction);
  }
}
