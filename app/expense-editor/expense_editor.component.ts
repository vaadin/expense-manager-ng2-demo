import {Component, Output, EventEmitter} from 'angular2/core'
import {NgForm}    from 'angular2/common';
import {PolymerElement} from '../polymer-element/polymer_element.directive';
import {VaadinElement} from '../vaadin-element/vaadin_element.directive';


@Component({
  selector: 'expense-editor',
  template: `
    <div class="main-layout">
      <h2>Edit expense</h2>
      <paper-icon-button icon="close" (click)="close()" class="close-button self-start"></paper-icon-button>
    </div>

    <div class="wrapper">
      <div class="form">
        <form (ngSubmit)="onSubmit($event.value)" #expenseForm="ngForm">
          <paper-input #merchant ngControl="merchant" ngDefaultControl [value]="expense.merchant" (value-changed)="merchant.fire('input');" label="Merchant" auto-validate required error-message="Merchant name required"></paper-input>
          <paper-input #total ngControl="total" ngDefaultControl [value]="expense.total" (value-changed)="total.fire('input');" polymer-element label="Total" auto-validate required pattern="[0-9,.]+" error-message="Numeric values only">
            <div prefix>$</div>
          </paper-input>

          <vaadin-date-picker ngControl="date" ngDefaultControl auto-validate required [value]="expense.date" label="Date"></vaadin-date-picker>

          <paper-textarea #comment ngControl="comment" ngDefaultControl [value]="expense.comment" (value-changed)="comment.fire('input');" label="Comment"></paper-textarea>

          <vaadin-upload></vaadin-upload>
        </form>
      </div>

      <div class="receipt">

      </div>
    </div>
    <div class="buttons-layout">
      <paper-button raised [disabled]="!expenseForm.form.valid" (click)="expenseForm.ngSubmit.emit(expenseForm)">Save</paper-button>
      <paper-button (click)="close()">Cancel</paper-button>
    </div>
  `,
  styles: [`
      .main-layout {
        display: flex;
        justify-content: space-between;
      }

      paper-icon-button {
        height: 28px;
        width: 28px;
      }

      .wrapper {
        display: flex;
        flex: 1;
        overflow: auto;
      }

      .form {
        flex: 2;
        padding-right: 24px;
      }

      .receipt {
        flex: 3;
        background: #F7F8F8;
      }
    `],
  directives: [PolymerElement, VaadinElement]
})
export class ExpenseEditor {

  expense: Object = {}

  @Output() closeEditor = new EventEmitter();

  private onSubmit(updated) {
    // Should save changes to some backend API probably
    // but we'll just update the object in this demo instead
    Object.assign(this.expense, updated);

    this.close();
  }

  private close() {
    this.closeEditor.emit();
    this.expense = {};
  }


}
