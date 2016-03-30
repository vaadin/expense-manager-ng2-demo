
import {Directive, ViewContainerRef} from 'angular2/core';

/*
* This directive aims to overcome the current issues in integrating vaadin-elements to an Angular 2 app.
*/
@Directive({
  selector: 'vaadin-grid, vaadin-combo-box, vaadin-date-picker, vaadin-upload'
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

    if (this.element.is === 'vaadin-grid') {
      const grid = this.element;

      // Need to stop selected-items-changed events during init to
      // avoid "Attempt to use a dehydrated detector" error.
      window.addEventListener('selected-items-changed', this.stopper, true);

      // Configuration <table> might be placed in a wrong container.
      // Let's move it in the light dom programmatically to fix that.
      const localDomTable = grid.querySelector("table:not(.style-scope)");
      if (localDomTable) {
        Polymer.dom(grid).appendChild(localDomTable);
      }

      // vaadin-grid 1.0 doesn't support placing a configuration table dynamically. A hacky workaround needed for now.
      const _c = grid._grid.c;
      try {
        grid._grid.c = null;
        grid._grid.init(grid, grid._findTableElement(Polymer.dom(grid).children), Polymer.dom(grid.root), grid.$.measureobject);
      } catch (e) {
        grid._grid.c = _c;
      }
    }

    if (this.element.is === 'vaadin-combo-box' || this.element.is === 'vaadin-date-picker') {
      // Need to fire 'input' event manually so ngControl can react to changes
      this.element.addEventListener('value-changed', () => {
        this.element.fire('input');
      });
      // Need to fire 'blur' event manually so ngControl can react to changes
      this.element.$$('paper-input-container').addEventListener('blur', () => {
        if (!this.element.opened && !this.element._opened){
          this.element.fire('blur');
        }
      });
    }





  }
}
