import {Component, Input} from 'angular2/core';
import {Http} from 'angular2/http';
import {VaadinGrid} from '../vaadin-grid/vaadin_grid.directive';
import {SearchFilters} from '../search-filters/search_filters.components';

@Component({
  selector: 'expenses-list',
  template: `
      <search-filters></search-filters>
      <vaadin-grid [items]="expenses">
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

  ngOnInit() {
    this.expenses.http = this.http;
  }

  expenses(params, callback) {
    this.http.get('./app/expenses-dev.json')
      .subscribe(response => { callback(response.json(), 1000) });
  }
}
