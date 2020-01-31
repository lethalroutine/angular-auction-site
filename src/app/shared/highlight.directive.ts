import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[apHighlight]'
})
export class HighlightDirective {

  @HostBinding('style.backgroundColor') bgColor: string;

  @HostListener('mouseover')
  mouseIsOver() {
    this.bgColor = 'yellow';
  }

  @HostListener('mouseout')
  mouseIsOut() {
    this.bgColor = '';
  }

}
