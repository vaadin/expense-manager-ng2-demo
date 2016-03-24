
import {Directive, ViewContainerRef} from 'angular2/core';

/*
* This directive aims to overcome the current issues in integrating vaadin-bar-chart to an Angular 2 app.
*/
@Directive({
  selector: 'vaadin-bar-chart'
})
export class VaadinBarChart {
  constructor(public viewContainer: ViewContainerRef) {
    const chart = viewContainer.element.nativeElement;

    var selector = "vaadin-bar-chart";
    var localDoms = ["chart-title", "subtitle", "x-axis", "y-axis", "tooltip", "plot-options", "legend", "data-series"];

    for(var ld of localDoms) {
      var localDom = chart.querySelector(ld + ":not(." + selector + ")");
      if (localDom) {
        Polymer.dom(chart).appendChild(localDom);
      }
    }

    chart.reloadConfiguration();
  }
}
