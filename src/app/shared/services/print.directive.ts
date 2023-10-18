import {Directive, ElementRef, inject, Input} from '@angular/core';
import {PrintAttribute} from "./print.constants";

@Directive({
  selector: '[appPrint]',
  standalone: true,
})
export class PrintDirective {
  @Input() set appPrint(shouldPrint: boolean) {
    this.elementRef.nativeElement.setAttribute(PrintAttribute, shouldPrint);
  }

  private readonly elementRef = inject(ElementRef);
}
