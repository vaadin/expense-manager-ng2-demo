import {Component} from 'angular2/core';
import {VaadinGrid} from '../vaadin-grid/vaadin_grid.directive';

@Component({
    selector: 'expenses-list',
    template: `
      <search-filters #searchfilters>Search filters</search-filters>
      <vaadin-grid #expenses>
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
    directives: [VaadinGrid]
})
export class ExpensesList {

}
