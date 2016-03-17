
import {Directive, ViewContainerRef} from 'angular2/core';

/*
* This directive aims to overcome the current issues in integrating vaadin-grid 1.0 to an Angular 2 app.
* The problems mainly relate to using a <table> element for configuring the grid.
*/
@Directive({
  selector: 'vaadin-grid'
})
export class VaadinGrid {
  constructor(public viewContainer: ViewContainerRef) {
    const grid = viewContainer.element.nativeElement;

    // Configuration <table> might be placed in a wrong container.
    // Let's move it in the light dom programmatically to fix that.
    var localDomTable = grid.querySelector("table:not(.vaadin-grid)");
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
