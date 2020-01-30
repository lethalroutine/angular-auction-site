import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ap-footer',
  template: `
    <footer class='fixed-bottom'>
      {{ copyrightMessage }}
    </footer>
  `,
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  copyrightMessage = 'AuctionPortal Copyright 2020';
  constructor() { }

  ngOnInit() {
  }

}
