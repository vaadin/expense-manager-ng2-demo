import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {Http} from 'angular2/http';
import {VaadinGrid} from '../vaadin-grid/vaadin_grid.directive';
import {SearchFilters} from '../search-filters/search_filters.component';

@Component({
  selector: 'expenses-list',
  templateUrl: './app/expenses-list/expenses_list.component.html',
  styleUrls: ['./app/expenses-list/expenses_list.component.css'],
  directives: [VaadinGrid, SearchFilters]
})
export class ExpensesList {

  @Input() http: Http;

  @Output() editExpense = new EventEmitter();

  filters: Object;

  constructor() {
    this.expenses.$ = this;
  }

  expenses(params, callback) {
    this.$.http.get('./app/expenses-dev.json')
      .subscribe(response => {
        var result = response.json();
        var filters = this.$.filters;
        if (filters) {
          result = result.filter((item) => {
            return !filters.merchant || item.merchant === filters.merchant;
          }).filter((item) => {
            return !filters.min || item.total >= filters.min;
          }).filter((item) => {
            return !filters.max || item.total <= filters.max;
          });
        }
        callback(result, result.length);
      }
    );
  }

  filtersChange(filters, grid) {
    this.filters = filters;
    grid.scrollToStart();
    grid.refreshItems();

  }

  selected(grid) {
    var selection = grid.selection.selected();
    if (selection.length === 1) {
      grid.selection.clear();
      grid.getItem(selection[0], (err, item) => {
        this.editExpense.emit(item);
      });
    }
  }
}
