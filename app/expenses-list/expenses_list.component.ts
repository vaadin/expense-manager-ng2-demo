import {Component, Input} from 'angular2/core';
import {Http} from 'angular2/http';
import {VaadinGrid} from '../vaadin-grid/vaadin_grid.directive';
import {SearchFilters} from '../search-filters/search_filters.components';

@Component({
  selector: 'expenses-list',
  template: `
      <search-filters (filtersChange)="filtersChange($event, grid)"></search-filters>
      <vaadin-grid #grid [items]="expenses">
        <table>
          <colgroup>
            <col name="date" width="120" sortable/>
            <col name="merchant" width="200" sortable/>
            <col name="total" width="150" sortable/>
            <col name="status" width="150" sortable/>
            <col name="comment" sortable/>
          </colgroup>
        </table>
      </vaadin-grid>
      <button>Add</button>
    `,
  directives: [VaadinGrid, SearchFilters]
})
export class ExpensesList {

  @Input() http: Http;

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
    grid.refreshItems();

  }
}
