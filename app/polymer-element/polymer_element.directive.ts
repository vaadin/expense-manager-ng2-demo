
import {Directive, ElementRef} from 'angular2/core';

@Directive({
  selector: '[polymer-element]'
})
export class PolymerElement {

  private _element;

  constructor(element: ElementRef) {
    this._element = element.nativeElement;
  }

  ngAfterViewInit() {
    // Move all elements targeted to light dom to the actual light dom with Polymer apis
    const misplaced = this._element.querySelectorAll("*:not(.style-scope)");

    [].forEach.call(misplaced, (e) => {
      if (e.parentElement === this._element) {
        Polymer.dom(this._element).appendChild(e);
      }
    });
  }
}
