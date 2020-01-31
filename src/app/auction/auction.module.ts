import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AuctionRoutingModule } from './auction-routing.module';
import { AuctionsSiteComponent } from './auctions-site/auctions-site.component';
import { PromotionsSiteComponent } from './promotions-site/promotions-site.component';
import { AuctionCardComponent } from './auction-card/auction-card.component';
import { CartSiteComponent } from './cart-site/cart-site.component';
import { AddAuctionSiteComponent } from './add-auction-site/add-auction-site.component';
import { CartItemsCounterComponent } from './cart-items-counter/cart-items-counter.component';


@NgModule({
  declarations: [AuctionsSiteComponent, PromotionsSiteComponent, AuctionCardComponent,
    CartSiteComponent, AddAuctionSiteComponent, CartItemsCounterComponent],
  imports: [
    CommonModule,
    AuctionRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [AuctionsSiteComponent]
})
export class AuctionModule { }
