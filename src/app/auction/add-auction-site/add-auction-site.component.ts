import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuctionItem } from './../auctions-site/auction-item';
import { AuctionsService } from './../auctions.service';

@Component({
  selector: 'ap-add-auction-site',
  templateUrl: './add-auction-site.component.html',
  styleUrls: ['./add-auction-site.component.css']
})
export class AddAuctionSiteComponent implements OnInit {
  imgId = 100;
  constructor(private auctionService: AuctionsService) { }

  ngOnInit() {
  }

  handleFormSubmit(form: NgForm) {
    const myAuction = form.value  as AuctionItem;
    myAuction.imageUrl = `https://picsum.photos/id/${this.imgId}/200/200`;
    this.auctionService.addAuctionItem(myAuction).subscribe(() => {
      form.reset();
      this.imgId = 1;
    });
  }

}
