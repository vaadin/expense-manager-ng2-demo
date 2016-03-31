import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {Http} from 'angular2/http';
import {VaadinElement} from '../vaadin-element/vaadin_element.directive';
import {SearchFilters} from '../search-filters/search_filters.component';

@Component({
  selector: 'expenses-list',
  templateUrl: './app/expenses-list/expenses_list.component.html',
  directives: [VaadinElement, SearchFilters]
})
export class ExpensesList {

  @Input() http: Http;

  @Output() editExpense = new EventEmitter();

  filters: Object;

  private merchants: string[];

  constructor() {
    this.refreshItems();
  }

  private expenses(params, callback) {
    const filters = this.filters || {};

    const url = './api/expenses?index=' + params.index +
    '&count=' + params.count +
    '&merchant=' + (filters.merchant || '') +
    '&min=' + (filters.min || '') +
    '&max=' + (filters.max || '');

    //this.http.get(url)
    //  .subscribe(response => {...});
    // In this demo we'll use a dummy datasource instead of an actual xhr
    var totalCount = 2000;
    totalCount -= filters.merchant ? 1000 : 0;
    totalCount -= filters.min ? 300 : 0;
    totalCount -= filters.max ? 300 : 0;
    window.getJSON(url, (data) => {
      callback(data, totalCount);
    });
  }

  private selected(grid) {
    var selection = grid.selection.selected();
    if (selection.length === 1) {
      grid.selection.clear();
      grid.getItem(selection[0], (err, item) => {
        this.editExpense.emit(item);
      });
    }
  }

  refreshItems() {
    // This will make grid update it's items (since the datasource changes)
    this.expenses = this.expenses.bind(this);
    // Update merchant list
    window.getJSON('./api/merchants', (data) => {
      this.merchants = data.sort();
    });
  }
}
