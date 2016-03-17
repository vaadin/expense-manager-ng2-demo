import {Component, Input} from 'angular2/core';
import {Http} from 'angular2/http';
import {ExpensesList} from '../expenses-list/expenses_list.component';
import {OverviewPanel} from '../overview-panel/overview_panel.component';

@Component({
    selector: 'overview-page',
    template: `
      <div class="toolbar"><h1>Expense Manager</h1><span>LOGOUT</span></div>
      <div class="content">
        <expenses-list [http]="http"></expenses-list>
        <overview-panel></overview-panel>
      </div>
    `,
    directives: [ExpensesList, OverviewPanel],
    styleUrls: ['./app/overview-page/overview_page.css']
})
export class OverviewPage {

  @Input() http: Http;
}
