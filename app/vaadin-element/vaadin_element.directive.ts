
import {Directive, ViewContainerRef} from 'angular2/core';

/*
* This directive aims to overcome the current issues in integrating vaadin-elements to an Angular 2 app.
*/
@Directive({
  selector: 'vaadin-grid, vaadin-combo-box, vaadin-date-picker, vaadin-upload, [vaadin-element]'
})
export class VaadinElement {

  private element;

  stopper = (e) => {
    e.stopPropagation();
  }

  ngOnInit() {
    window.removeEventListener('selected-items-changed', this.stopper, true);
  }

  constructor(public viewContainer: ViewContainerRef) {
    this.element = viewContainer.element.nativeElement;

    /*
    * common workarounds
    */
    // Move all elements targeted to light dom to the actual light dom with Polymer apis
    var misplaced;
    while (misplaced = this.element.querySelector("*:not(.style-scope)")) {
      Polymer.dom(this.element).appendChild(misplaced);
    }

    /*
    * vaadin-grid workarounds
    */
    if (this.element.is === 'vaadin-grid') {
      // Need to stop selected-items-changed events during grid init to
      // avoid "Attempt to use a dehydrated detector" error.
      window.addEventListener('selected-items-changed', this.stopper, true);

      // vaadin-grid 1.0 doesn't support placing a configuration table dynamically. A hacky workaround needed for now.
      const _c = this.element._grid.c;
      try {
        this.element._grid.c = null;
        this.element._grid.init(this.element, this.element._findTableElement(Polymer.dom(this.element).children), Polymer.dom(this.element.root), this.element.$.measureobject);
      } catch (e) {
        // Ignore
      }
      this.element._grid.c = _c;
    }

    /*
    * Common workarounds for vaadin-combo-box and vaadin-date-picker
    */
    if (this.element.is === 'vaadin-combo-box' || this.element.is === 'vaadin-date-picker') {
      // Need to fire 'input' event manually so ngControl can react to changes
      this.element.addEventListener('value-changed', () => {
        this.element.fire('input');
      });
      // Need to fire 'blur' event manually so ngControl can react to changes
      this.element.$$('paper-input-container').addEventListener('blur', () => {
        if (!this.element.opened && !this.element._opened) {
          this.element.fire('blur');
        }
      });
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
