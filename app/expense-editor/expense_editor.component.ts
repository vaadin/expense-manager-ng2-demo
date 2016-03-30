import {Component, Output, EventEmitter} from 'angular2/core'
import {NgForm}    from 'angular2/common';
import {PolymerElement} from '../polymer-element/polymer_element.directive';
import {VaadinElement} from '../vaadin-element/vaadin_element.directive';


@Component({
  selector: 'expense-editor',
  template: `
    <div class="main-layout">
      <h2>{{heading}}</h2>
      <paper-icon-button icon="close" (click)="closeEditor.emit()" class="close-button self-start"></paper-icon-button>
    </div>

    <div class="wrapper">
      <div class="form">
        <form (ngSubmit)="onSubmit()" #expenseForm="ngForm">
          <paper-input #merchant ngControl="merchant" ngDefaultControl [value]="expense.merchant" (value-changed)="expense.merchant=$event.detail.value; merchant.fire('input');" label="Merchant" auto-validate required error-message="Merchant name required"></paper-input>
          <paper-input #total ngControl="total" ngDefaultControl [value]="expense.total" (value-changed)="expense.total=$event.detail.value; total.fire('input');" polymer-element label="Total" auto-validate required pattern="[0-9,.]+" error-message="Numeric values only">
            <div prefix>$</div>
          </paper-input>

          <vaadin-date-picker #spy ngControl="date" ngDefaultControl name="date" auto-validate required [value]="expense.date" (value-changed)="expense.date=$event.detail.value" label="Date"></vaadin-date-picker>

          <paper-textarea value="{{expense.comment}}" id="comment" name="comment" label="Comment" value=""></paper-textarea>

          <input type="file" accept="image/jpeg" id="receiptupload" name="receipt" capture="camera" hidden>
          <span id="error">{{errorText}}</span>

        </form>
      </div>

      <div class="receipt">
        <vaadin-upload></vaadin-upload>
      </div>
    </div>
    <div class="buttons-layout">
      <paper-button raised (click)="expenseForm.submit()" class="save-button" [disabled]="!expenseForm.form.valid">Save</paper-button>
      <paper-button (click)="closeEditor.emit()" class="cancel-button">Cancel</paper-button>
      <paper-button (click)="_delete" id="delete" class="delete-button">Delete</paper-button>
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

  heading: String = 'Edit expense'

  expense: Object = {comment: ''}

  items = ['foo', 'bar']

  @Output() closeEditor = new EventEmitter();

  constructor() {

  }

  onSubmit() {
    
  }


}
