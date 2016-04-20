import {Component, Input} from 'angular2/core';
import {ExpensesList} from '../expenses-list/expenses_list.component';
import {OverviewPanel} from '../overview-panel/overview_panel.component';
import {ExpenseEditor} from '../expense-editor/expense_editor.component';

@Component({
  selector: 'overview-page',
  templateUrl: './app/overview-page/overview_page.component.html',
  directives: [ExpensesList, OverviewPanel, ExpenseEditor],
  styles: [`
      :host {
        display: flex;
        flex-direction: column;
        height: 100%;
      }
      .content {
        display: flex;
        flex: 1;
      }
      expenses-list {
        flex: 1;
      }
      h1 {
        font-weight: 300;
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
        padding: 0 18px;
        background: #37474F;
        color: #fff;
        height: 64px;
      }
      .toolbar img {
        margin-left: 12px;
      }
      .toolbar span {
        flex: 1;
        text-align: right;
        font-size: 14px;
        color: #80cbc4;
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
      @media (max-width: 960px) {
        overview-panel {
          display: none;
        }
      }
      @media (max-width: 600px) {
        h1 {
          font-size: 18px;
        }
      }
    `]
})
export class OverviewPage {


}
