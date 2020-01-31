import { Component, OnInit } from '@angular/core';
import { CartService } from './../cart.service';
import { pipe } from 'rxjs';

@Component({
  selector: 'ap-cart-items-counter',
  template: `
    <p>
      Masz już {{ numberOfItemsInCart }} elementów w koszyku!
    </p>
  `,
  styles: []
})
export class CartItemsCounterComponent implements OnInit {
  numberOfItemsInCart = 0;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.countItems().subscribe((num: number) => this.numberOfItemsInCart = num);
  }

}
