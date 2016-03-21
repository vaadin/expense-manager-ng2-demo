import {Component, EventEmitter, Output} from 'angular2/core';

@Component({
  selector: 'search-filters',
  templateUrl: './app/search-filters/search_filters.component.html'
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
