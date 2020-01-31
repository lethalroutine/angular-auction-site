import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AuctionRoutingModule } from './auction-routing.module';
import { AuctionsSiteComponent } from './auctions-site/auctions-site.component';
import { PromotionsSiteComponent } from './promotions-site/promotions-site.component';
import { AuctionCardComponent } from './auction-card/auction-card.component';
import { CartSiteComponent } from './cart-site/cart-site.component';


@NgModule({
  declarations: [AuctionsSiteComponent, PromotionsSiteComponent, AuctionCardComponent, CartSiteComponent],
  imports: [
    CommonModule,
    AuctionRoutingModule,
    HttpClientModule,
  ],
  exports: [AuctionsSiteComponent]
})
export class AuctionModule { }
