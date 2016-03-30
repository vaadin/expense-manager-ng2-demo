import {Component} from 'angular2/core';
import {VaadinElement} from '../vaadin-element/vaadin_element.directive';

@Component({
    selector: 'overview-panel',
    templateUrl: './app/overview-panel/overview_panel.component.html',
    styleUrls: ['./app/overview-panel/overview_panel.component.css'],
    directives: [VaadinElement]
})
export class OverviewPanel {

}
