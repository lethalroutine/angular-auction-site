import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ap-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Auction Portal';

  constructor() { }

  ngOnInit() {
  }

  printTitle(): string {
    return this.title;
  }

  handleHeaderClick() {
    console.log('Header clicked');
  }
}
