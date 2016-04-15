import {Component} from 'angular2/core';
import {VaadinCharts, DataSeries } from 'vaadin-charts';

@Component({
    selector: 'overview-panel',
    templateUrl: './app/overview-panel/overview_panel.component.html',
    styleUrls: ['./app/overview-panel/overview_panel.component.css'],
    directives: [VaadinCharts,DataSeries]
})
export class OverviewPanel {

}
