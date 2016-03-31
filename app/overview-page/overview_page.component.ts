import {Component, Input} from 'angular2/core';
import {Http} from 'angular2/http';
import {ExpensesList} from '../expenses-list/expenses_list.component';
import {OverviewPanel} from '../overview-panel/overview_panel.component';
import {ExpenseEditor} from '../expense-editor/expense_editor.component';

@Component({
  selector: 'overview-page',
  templateUrl: './app/overview-page/overview_page.component.html',
  directives: [ExpensesList, OverviewPanel, ExpenseEditor],
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
      paper-dialog {
        display: block;
        padding: 16px 32px;
        border: 1px solid #ccc;
        position: absolute;
        top: 0;
        margin: 0;
        width: 80vw;
        height: 100vh;
      }
      expense-editor {
        display: flex;
        flex-direction: column;
        height: 100%;
        margin: 0 !important;
        padding: 0 !important;
      }
    `]
})
export class OverviewPage {

  @Input() http: Http;

  private editExpense(expense, editor, dialog) {
    editor.expense = expense;
    dialog.open();
  }

  private closeEditor(dialog, list) {
    dialog.close();
    list.refreshItems();
  }
}
