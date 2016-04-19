import {Component, EventEmitter, Output, Input} from 'angular2/core';
import {VaadinComboBox} from '../../bower_components/vaadin-combo-box/directives/vaadin-combo-box';
import {VaadinDatePicker} from '../../bower_components/vaadin-date-picker/directives/vaadin-date-picker';

@Component({
  selector: 'search-filters',
  template: `
    <div class="row">
      <vaadin-date-picker label="After" (valueChange)="filtersChanged()" [(value)]="filters.after"></vaadin-date-picker>
      <vaadin-date-picker label="Before" (valueChange)="filtersChanged()" [(value)]="filters.before"></vaadin-date-picker>
      <vaadin-combo-box class="merchants" [items]="merchants" label="Merchant" (valueChange)="filtersChanged()" [(value)]="filters.merchant"></vaadin-combo-box>
    </div>
    <div class="row">
      <paper-input placeholder="Min ($)" (keyup)="filters.min = $event.target.value; filtersChanged();"></paper-input>
      <paper-input placeholder="Max ($)" (keyup)="filters.max = $event.target.value; filtersChanged();"></paper-input>
    </div>
  `,
  styleUrls: ['./app/search-filters/search_filters.component.css'],
  directives: [VaadinComboBox, VaadinDatePicker]
})
export class SearchFilters {

  filters: Object = {};

  @Output() filtersChange = new EventEmitter();

  @Input() merchants: string[];

  private filtersChanged() {
    this.filtersChange.emit(this.filters);
  }

}
