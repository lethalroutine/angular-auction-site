import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuctionRoutingModule } from './auction-routing.module';
import { AuctionsSiteComponent } from './auctions-site/auctions-site.component';
import { PromotionsSiteComponent } from './promotions-site/promotions-site.component';
import { AuctionCardComponent } from './auction-card/auction-card.component';


@NgModule({
  declarations: [AuctionsSiteComponent, PromotionsSiteComponent, AuctionCardComponent],
  imports: [
    CommonModule,
    AuctionRoutingModule
  ],
  exports: [AuctionsSiteComponent]
})
export class AuctionModule { }
