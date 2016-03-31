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


    <form (ngSubmit)="onSubmit($event.value)" #expenseForm="ngForm">
      <div class="form">
        <paper-input #merchant ngControl="merchant" ngDefaultControl [value]="expense.merchant" (value-changed)="merchant.fire('input');" label="Merchant" auto-validate required error-message="Merchant name required"></paper-input>
        <paper-input #total ngControl="total" ngDefaultControl [value]="expense.total" (value-changed)="total.fire('input');" polymer-element label="Total" auto-validate required pattern="[0-9,.]+" error-message="Numeric values only">
          <div prefix>$</div>
        </paper-input>

        <vaadin-date-picker ngControl="date" ngDefaultControl auto-validate required [value]="expense.date" label="Date"></vaadin-date-picker>

        <paper-textarea #comment ngControl="comment" ngDefaultControl [value]="expense.comment" (value-changed)="comment.fire('input');" label="Comment"></paper-textarea>

      </div>

      <div class="receipt">
        <input type="hidden" ngControl="receipt" [ngModel]="expense.receipt">
        <vaadin-upload (upload-success)="uploadSuccess($event)">
          <div class="file-list">
            <img *ngIf="expense.receipt !== 'default'" src={{expense.receipt}}>
            <img *ngIf="expense.receipt === 'default'" src="images/default-receipt.png">
          </div>
        </vaadin-upload>
      </div>
    </form>

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

      form {
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

      img {
        width: 100%;
        max-height: 500px;
        margin-bottom: 20px;
      }

      vaadin-upload {
        display: flex;
        flex-direction: column-reverse;
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
    setTimeout(()=> {
      this.expense = {};
    }, 100);

  }

  private uploadSuccess(e) {
    const file = e.detail.file;
    var reader  = new FileReader();

    reader.addEventListener("load", () => {
      this.expense.receipt = reader.result;
    }, false);

    if (file) {
      reader.readAsDataURL(file);
    }
  }


}
