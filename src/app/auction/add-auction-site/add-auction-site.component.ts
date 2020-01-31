import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ap-add-auction-site',
  templateUrl: './add-auction-site.component.html',
  styleUrls: ['./add-auction-site.component.css']
})
export class AddAuctionSiteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  handleFormSubmit(form: NgForm) {
    console.log(form);
  }

}
