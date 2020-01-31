import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';
import { PriceCurrencyPipe } from './price-currency.pipe';



@NgModule({
  declarations: [HighlightDirective, PriceCurrencyPipe],
  imports: [
    CommonModule
  ],
  exports: [HighlightDirective, PriceCurrencyPipe]
})
export class SharedModule { }
