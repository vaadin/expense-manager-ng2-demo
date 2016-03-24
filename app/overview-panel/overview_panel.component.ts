import {Component} from 'angular2/core';
import {VaadinBarChart} from '../vaadin-bar-chart/vaadin_bar_chart.directive';

@Component({
    selector: 'overview-panel',
    templateUrl: './app/overview-panel/overview_panel.component.html',
    styleUrls: ['./app/overview-panel/overview_panel.component.css'],
    directives: [VaadinBarChart]
})
export class OverviewPanel {

}
