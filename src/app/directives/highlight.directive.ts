import { style } from '@angular/animations';
import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  constructor(private el:ElementRef) {
    
   }
@HostBinding("style.BackgroundColor")
bgColor="red"

@HostListener("mouseenter")
changeColor(){
  this.bgColor="yellow"
  this.el.nativeElement.style.fontSize="40px"
}
@HostListener("mouseleave")
resetcolor(){
  this.bgColor="red"
this.el.nativeElement.style.fontSize="30px"
}
}
