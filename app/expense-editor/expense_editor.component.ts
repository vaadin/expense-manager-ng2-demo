import {Component, Output, EventEmitter} from 'angular2/core'
import {PolymerElement} from '../polymer-element/polymer_element.directive';

@Component({
  selector: 'expense-editor',
  template: `
    <div class="main-layout">
      <h2>{{heading}}</h2>
      <paper-icon-button icon="close" (click)="closeEditor.emit()" class="close-button self-start"></paper-icon-button>
    </div>

    <div class="wrapper">
      <div class="form">
        <iron-a11y-keys keys="enter" on-keys-pressed="_save"></iron-a11y-keys>
        <paper-input name="merchant" id="merchant" label="Merchant" auto-validate required error-message="Merchant name required"></paper-input>
        <paper-input polymer-element name="total" id="total" label="Total" auto-validate required pattern="[\d,.]+" error-message="Numeric values only">
          <div prefix>$</div>
        </paper-input>

        <vaadin-date-picker label="Date" id="date" name="date" auto-validate></vaadin-date-picker>
        <paper-textarea id="comment" name="comment" label="Comment" value=""></paper-textarea>

        <input type="file" accept="image/jpeg" id="receiptupload" name="receipt" capture="camera" hidden>
        <span id="error">{{errorText}}</span>
      </div>
      <div class="receipt">
        <vaadin-upload></vaadin-upload>
      </div>
    </div>
    <div class="buttons-layout">
      <paper-button raised (click)="_save" class="save-button">Save</paper-button>
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
  directives: [PolymerElement]
})
export class ExpenseEditor {

  heading: String = 'Edit expense'

  @Output() closeEditor = new EventEmitter();

  constructor() {

  }


}
