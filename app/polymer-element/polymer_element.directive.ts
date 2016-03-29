
import {Directive, ViewContainerRef} from 'angular2/core';

@Directive({
  selector: '[polymer-element]'
})
export class PolymerElement {
  constructor(public viewContainer: ViewContainerRef) {
    const element = viewContainer.element.nativeElement;
    const misplaced = element.querySelectorAll("*:not(.style-scope)");
    [].forEach.call(misplaced, function(e) {
      if (e.parentElement === element) {
        Polymer.dom(element).appendChild(e);
      }
    });
  }
}
