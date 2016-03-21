import {Component, Input} from 'angular2/core';
import {Http} from 'angular2/http';
import {ExpensesList} from '../expenses-list/expenses_list.component';
import {OverviewPanel} from '../overview-panel/overview_panel.component';

@Component({
  selector: 'overview-page',
  templateUrl: './app/overview-page/overview_page.component.html',
  directives: [ExpensesList, OverviewPanel],
  styles: [`
      .content {
        display: flex;
      }
      expenses-list {
        flex: 1;
      }
      overview-panel {
        width: 33%;
        max-width: 300px;
        background: #80CBC4;
        z-index: 1;
      }
      .toolbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 20px;
        background: #37474F;
        color: #fff;
      }
    `]
})
export class OverviewPage {

  @Input() http: Http;

  editExpense(expense, editor) {
    editor.expense = expense;
    //editor.open();
  }
}
