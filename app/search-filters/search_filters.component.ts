import {Component, EventEmitter, Output} from 'angular2/core';

@Component({
  selector: 'search-filters',
  template: `
    <vaadin-combo-box class="merchants" [items]="merchants" label="Merchant" (value-changed)="filters.merchant = $event.target.value; filtersChanged();"></vaadin-combo-box>
    <paper-input placeholder="Min" (keyup)="filters.min = $event.target.value; filtersChanged();"></paper-input>
    <paper-input placeholder="Max" (keyup)="filters.max = $event.target.value; filtersChanged();"></paper-input>
  `,
  styleUrls: ['./app/search-filters/search_filters.component.css']
})
export class SearchFilters {

  filters: Object = {};

  @Output() filtersChange = new EventEmitter();

  merchants: string[] = ["Airline", "Rental car", "Taxi", "Restaurant",
    "Breakfast", "Office supplies", "Fast food", "Electronics", "Parking",
    "Hotel", "Shuttle", "Ride sharing"];

  private filtersChanged() {
    this.filtersChange.emit(this.filters);
  }

}
