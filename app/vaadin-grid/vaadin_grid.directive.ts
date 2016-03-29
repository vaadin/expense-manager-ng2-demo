
import {Directive, ViewContainerRef} from 'angular2/core';

/*
* This directive aims to overcome the current issues in integrating vaadin-grid 1.0 to an Angular 2 app.
*/
@Directive({
  selector: 'vaadin-grid'
})
export class VaadinGrid {

  stopper: Function = (e) => {
    e.stopPropagation();
  }

  ngOnInit() {
    const grid = this.viewContainer.element.nativeElement
    grid.parentElement.removeEventListener('selected-items-changed', this.stopper, true);
  }

  constructor(public viewContainer: ViewContainerRef) {
    // Need to stop selected-items-changed events during init to
    // avoid "Attempt to use a dehydrated detector" error.
    const grid = viewContainer.element.nativeElement;
    grid.parentElement.addEventListener('selected-items-changed', this.stopper, true);

    // Configuration <table> might be placed in a wrong container.
    // Let's move it in the light dom programmatically to fix that.
    const localDomTable = grid.querySelector("table:not(.vaadin-grid)");
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
}
