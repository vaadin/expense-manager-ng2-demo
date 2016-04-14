
import {Directive, ViewContainerRef} from 'angular2/core';

/*
* This directive aims to overcome the current issues in integrating vaadin-elements to an Angular 2 app.
*/
@Directive({
  selector: 'vaadin-grid, [vaadin-element]'
})
export class VaadinElement {

  private element;

  stopper = (e) => {
    e.stopPropagation();
  }

  ngOnInit() {
    this.element.parentElement.removeEventListener('selected-items-changed', this.stopper, true);


    if (typeof this.element.items === 'function') {
      const parentContext = this.viewContainer.element.internalElement.parentView.context;

      for (var api in parentContext) {
        if (parentContext[api] === this.element.items) {
          this.element.items = this.element.items.bind(parentContext);
          break;
        }
      }

    }
  }

  constructor(public viewContainer: ViewContainerRef) {
    this.element = viewContainer.element.nativeElement;

    /*
    * common workarounds
    */
    // Move all elements targeted to light dom to the actual light dom with Polymer apis
    const misplaced = this.element.querySelectorAll("*:not(.style-scope)");
    [].forEach.call(misplaced, (e) => {
      if (e.parentElement === this.element) {
        Polymer.dom(this.element).appendChild(e);
      }
    });

    /*
    * vaadin-grid workarounds
    */
    if (this.element.is === 'vaadin-grid') {
      // Need to stop selected-items-changed events during grid init to
      // avoid "Attempt to use a dehydrated detector" error.
      this.element.parentElement.addEventListener('selected-items-changed', this.stopper, true);

      // vaadin-grid 1.0 doesn't support placing a configuration table dynamically. A hacky workaround needed for now.
      var c;
      for (var i in this.element._grid) {
        if (this.element._grid[i] && this.element._grid[i].tagName == 'VAADIN-GRID') {
          c = i;
          break;
        }
      }
      const _c = this.element._grid[c];
      try {
        this.element._grid[c] = null;
        this.element._grid.init(this.element, this.element._findTableElement(Polymer.dom(this.element).children), Polymer.dom(this.element.root), this.element.$.measureobject);
      } catch (e) {
        // Ignore
      }
      this.element._grid[c] = _c;
    }

    /*
    * Vaadin Charts workarounds
    */
    if (this.element.reloadConfiguration) {
      // Charts need reloadConfiguration called if light dom configuration changes dynamically
      this.element.reloadConfiguration();
    }

  }
}
