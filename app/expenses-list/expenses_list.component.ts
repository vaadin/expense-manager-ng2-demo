import {Component, Input, Output, EventEmitter} from '@angular/core';
import {PolymerElement} from 'vaadin-ng2-polymer/polymer-element'
import {SearchFilters} from '../search-filters/search_filters.component';
declare var HTMLImports;
declare var Polymer;
declare var moment;
declare var accounting;

@Component({
  selector: 'expenses-list',
  templateUrl: './app/expenses-list/expenses_list.component.html',
  styleUrls: ['./app/expenses-list/expenses_list.component.css'],
  directives: [PolymerElement('vaadin-grid'), SearchFilters]
})
export class ExpensesList {

  @Output() editExpense = new EventEmitter();

  filters: Object;
  sortOrder: Object;

  private merchants: string[];

  constructor() {
    this.refreshItems();
  }

  gridReady(grid) {
    grid.cellClassGenerator = (cell) => {
      if (cell.columnName === 'status') {
        return 'status-' + cell.data.replace(/ /g, '-').toLowerCase();
      }
    };

    grid.addEventListener('sort-order-changed', (e) => {
      var sortBy = grid.columns[e.detail.value[0].column].name;
      this.sortOrder = { sortBy: sortBy, direction: e.detail.value[0].direction };

      // sort order is fired for the first time before grid has been initialized properly,
      // so scrolling will crash.
      try {
        grid.scrollToStart(0);
        grid.refreshItems();
      } catch (err) {

      }
    });

    grid.columns[0].renderer = (cell) => {
      cell.element.innerHTML = moment(cell.data).format('YYYY-MM-DD');
    };

    grid.columns[2].renderer = (cell) => {
      cell.element.innerHTML = accounting.formatMoney(cell.data);
    };

    grid.columns[3].renderer = (cell) => {
      var status = cell.data.replace(/_/g, ' ');
      status = status.charAt(0).toUpperCase() + status.slice(1);
      cell.element.textContent = status;
    };
  }

  private expenses(params, callback) {
    const filters: any = this.filters || {};
    const sortOrder: any = this.sortOrder || {};

    const url = './api/expenses?index=' + params.index +
      '&count=' + params.count +
      '&merchant=' + (filters.merchant || '') +
      '&min=' + (filters.min || '') +
      '&max=' + (filters.max || '') +
      '&before=' + (filters.before || '') +
      '&after=' + (filters.after || '') +
      '&statuses=' + (filters.statuses || '') +
      '&sortBy=' + (sortOrder.sortBy) +
      '&sortDirection=' + (sortOrder.direction);

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

  private onFiltersChanged(grid) {
    if (Polymer && Polymer.isInstance(grid)) {
      grid.scrollToStart(0);
      grid.refreshItems();
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
