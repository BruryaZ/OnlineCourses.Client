import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appRoundShadow]'
})
  export class RoundShadowDirective {
    constructor(private el: ElementRef) {
      this.setInitialStyle();
    }
  
    private setInitialStyle() {
      this.el.nativeElement.style.transition = 'box-shadow 0.3s ease';
    }
  
    @HostListener('mouseenter') onMouseEnter() {
      this.setShadow('0 8px 30px rgba(0, 0, 0, 0.5)');
    }
  
    @HostListener('mouseleave') onMouseLeave() {
      this.setShadow('none');
    }
  
    private setShadow(shadow: string) {
      this.el.nativeElement.style.boxShadow = shadow;
    }
  }
