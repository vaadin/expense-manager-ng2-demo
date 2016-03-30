
import {Directive, ViewContainerRef} from 'angular2/core';

@Directive({
  selector: '[polymer-element]'
})
export class PolymerElement {
  constructor(public viewContainer: ViewContainerRef) {
    const element = viewContainer.element.nativeElement;
    // Move all elements targeted to light dom to the actual light dom with Polymer apis
    var misplaced;
    while (misplaced = element.querySelector("*:not(.style-scope)")) {
      Polymer.dom(element).appendChild(misplaced);
    }
  }
}
