import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceCurrency'
})
export class PriceCurrencyPipe implements PipeTransform {

  transform(price: number, currency = 'zł'): string {
    return price + ' ' + currency;
  }

}
