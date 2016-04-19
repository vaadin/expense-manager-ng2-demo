import {Component, Output, EventEmitter} from 'angular2/core'
import {NgForm}    from 'angular2/common';
import {PolymerElement} from '../polymer-element/polymer_element.directive';
import {VaadinDatePicker} from '../../bower_components/vaadin-date-picker/directives/vaadin-date-picker';
import {VaadinUpload} from '../../bower_components/vaadin-upload/directives/vaadin-upload';
declare var accounting;

@Component({
  selector: 'expense-editor',
  templateUrl: './app/expense-editor/expense_editor.component.html',
  styleUrls: ['./app/expense-editor/expense_editor.component.css'],
  directives: [PolymerElement, VaadinUpload, VaadinDatePicker]
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

  private upload(e) {
    const file = e.detail.file;
    var reader  = new FileReader();

    reader.addEventListener("load", () => {
      this.expense.receipt = reader.result;
    }, false);

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  private formatMoney(value) {
    return accounting.formatMoney(value, '');
  }
}
