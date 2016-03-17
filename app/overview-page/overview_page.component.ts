import {Component} from 'angular2/core';
import {ExpensesList} from '../expenses-list/expenses_list.component';

@Component({
    selector: 'overview-page',
    template: `
      <div #toolbar><h1>Expense Manager</h1></div>
      <div #content>
        <expenses-list></expenses-list>
      </div>
    `,
    directives: [ExpensesList]
})
export class OverviewPage {

}
