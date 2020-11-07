import { Directive, ElementRef, Host, HostListener } from '@angular/core';

@Directive({
  selector: '[appBackToTop]'
})
export class BackToTopDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.zIndex = '2';
    this.el.nativeElement.style.display = 'none';
    this.el.nativeElement.style.bottom = '0';
    this.el.nativeElement.style.position = 'fixed';
    this.el.nativeElement.style.marginLeft = '1em';
    this.el.nativeElement.style.marginBottom = '1em';
    this.el.nativeElement.style.transition = 'transform .5s';
  }

  @HostListener('click', ['$event.target']) onClick() {
    //this.el.nativeElement.
  }

  @HostListener("window:scroll", ['$event.target']) onWindowScroll(window) {
  }

}
