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

  printTitle(num: number): string {
    return this.title + num;
  }

  handleHeaderClick() {
    console.log('Header clicked');
  }
}
