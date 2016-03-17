import {Component} from 'angular2/core';
import {ExpensesList} from '../expenses-list/expenses_list.component';
import {OverviewPanel} from '../overview-panel/overview_panel.component';

@Component({
    selector: 'overview-page',
    template: `
      <div #toolbar><h1>Expense Manager</h1></div>
      <div class="content">
        <expenses-list></expenses-list>
        <overview-panel></overview-panel>
      </div>
    `,
    directives: [ExpensesList, OverviewPanel],
    styleUrls: ['./app/overview-page/overview_page.css']
})
export class OverviewPage {

}
