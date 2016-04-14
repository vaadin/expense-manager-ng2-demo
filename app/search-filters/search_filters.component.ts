import {Component, EventEmitter, Output, Input} from 'angular2/core';
import { VaadinComboBox } from '../../bower_components/vaadin-combo-box/directives/vaadin-combo-box';

@Component({
  selector: 'search-filters',
  template: `
    <vaadin-combo-box class="merchants" [items]="merchants" label="Merchant" (valueChange)="filtersChanged()" [(value)]="filters.merchant"></vaadin-combo-box>
    <paper-input placeholder="Min" (keyup)="filters.min = $event.target.value; filtersChanged();"></paper-input>
    <paper-input placeholder="Max" (keyup)="filters.max = $event.target.value; filtersChanged();"></paper-input>
  `,
  styleUrls: ['./app/search-filters/search_filters.component.css'],
  directives: [VaadinComboBox]
})
export class SearchFilters {

  filters: Object = {};

  @Output() filtersChange = new EventEmitter();

  @Input() merchants: string[];

  private filtersChanged() {
    this.filtersChange.emit(this.filters);
  }

}
