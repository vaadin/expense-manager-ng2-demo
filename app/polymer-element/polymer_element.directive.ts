
import {Directive, ViewContainerRef} from 'angular2/core';

@Directive({
  selector: '[polymer-element]'
})
export class PolymerElement {
  constructor(public viewContainer: ViewContainerRef) {
    const element = viewContainer.element.nativeElement;
    // Move all elements targeted to light dom to the actual light dom with Polymer apis
    const misplaced = element.querySelectorAll("*:not(.style-scope)");
    [].forEach.call(misplaced, function(e) {
      if (e.parentElement === element) {
        Polymer.dom(element).appendChild(e);
      }
    });

  }
}
