import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';

declare var HTMLImports: any;
declare var Polymer: any;
declare var moment: any;
declare var accounting: any;

@Component({
  selector: 'expenses-list',
  templateUrl: './app/expenses-list/expenses_list.component.html',
  styleUrls: ['./app/expenses-list/expenses_list.component.css']
})
export class ExpensesList {
  @Output() editExpense = new EventEmitter();
  @ViewChild('grid') grid: any;
  @ViewChild('toast') toast: any;

  filters: Object;
  sortOrder: Object;

  private merchants: string[];

  ngAfterViewInit() {
    this.refreshItems();
    this.grid.nativeElement.then(() => {
      this.gridReady(this.grid.nativeElement);
    });
  }

  gridReady(grid: any) {
    grid.cellClassGenerator = (cell: any) => {
      if (cell.columnName === 'status') {
        return 'status-' + cell.data.replace(/ /g, '-').toLowerCase();
      }
    };

    grid.addEventListener('sort-order-changed', (e: any) => {
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

    grid.columns[0].renderer = (cell: any) => {
      cell.element.innerHTML = moment(cell.data).format('YYYY-MM-DD');
    };

    grid.columns[2].renderer = (cell: any) => {
      cell.element.innerHTML = accounting.formatMoney(cell.data);
    };

    grid.columns[3].renderer = (cell: any) => {
      var status = cell.data.replace(/_/g, ' ');
      status = status.charAt(0).toUpperCase() + status.slice(1);
      cell.element.textContent = status;
    };
  }

  private expenses(params: any, callback: any) {
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
    (<any>window).getJSON(url, (data: any) => {
      callback(data, totalCount);

      if (data.length === 0 && this.toast) {
        this.toast.nativeElement.open();
      } else if (this.toast) {
        this.toast.nativeElement.hide();
      }
    });
  }

  private selected(grid: any) {
    var selection = grid.selection.selected();
    if (selection.length === 1) {
      grid.selection.clear();
      grid.getItem(selection[0], (err: any, item: any) => {
        this.editExpense.emit(item);
      });
    }
  }

  private onFiltersChanged(grid: any) {
    if (Polymer && Polymer.isInstance(grid)) {
      grid.scrollToStart(0);
      grid.refreshItems();
    }
  }

  refreshItems() {
    // This will make grid update it's items (since the datasource changes)
    this.expenses = this.expenses.bind(this);
    // Update merchant list
    (<any>window).getJSON('./api/merchants', (data: any) => {
      this.merchants = data.sort();
    });
  }

}
