import {Component, Output, EventEmitter} from '@angular/core'
import {NgForm}    from '@angular/common';
import {PolymerElement} from '@vaadin/angular2-polymer';
declare var accounting;

@Component({
  selector: 'expense-editor',
  templateUrl: './app/expense-editor/expense_editor.component.html',
  styleUrls: ['./app/expense-editor/expense_editor.component.css'],
  directives: [PolymerElement('paper-input'), PolymerElement('vaadin-upload'), PolymerElement('vaadin-date-picker')]
})
export class ExpenseEditor {

  expense: any = {}

  @Output() closeEditor = new EventEmitter();

  private onSubmit(updated) {
    // Should save changes to some backend API probably
    // but we'll just update the object in this demo instead
    Object.assign(this.expense, updated);

    this.close();
  }

  private close() {
    this.closeEditor.emit(false);
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
