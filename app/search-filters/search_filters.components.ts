import {Component, EventEmitter, Output} from 'angular2/core';

@Component({
  selector: 'search-filters',
  template: `
      <vaadin-combo-box [items]="merchants" label="Merchant" (value-changed)="filters.merchant = $event.target.value; filtersChanged();"></vaadin-combo-box>
      <div>
        <input placeholder="Min" (keyup)="filters.min = $event.target.value; filtersChanged();">
        <input placeholder="Max" (keyup)="filters.max = $event.target.value; filtersChanged();">
      </div>
    `
})
export class SearchFilters {

  filters: Object = {};

  @Output() filtersChange = new EventEmitter();

  merchants: string[] = ["Airline", "Rental car", "Taxi", "Restaurant",
    "Breakfast", "Office supplies", "Fast food", "Electronics", "Parking",
    "Hotel", "Shuttle", "Ride sharing"];

  filtersChanged() {
    this.filtersChange.emit(this.filters);
  }

}
