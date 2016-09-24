import { Component, Output, EventEmitter } from '@angular/core';

declare var accounting: any;

@Component({
  selector: 'expense-editor',
  templateUrl: './app/expense-editor/expense_editor.component.html',
  styleUrls: ['./app/expense-editor/expense_editor.component.css']
})
export class ExpenseEditor {
  expense: any = {}

  @Output() closeEditor = new EventEmitter();

  private onSubmit(updated:any) {
    // Should save changes to some backend API probably
    // but we'll just update the object in this demo instead
    Object.assign(this.expense, updated);

    this.close();
  }

  private close() {
    this.closeEditor.emit(false);
  }

  private upload(e:any) {
    const file = e.detail.file;
    var reader  = new FileReader();

    reader.addEventListener("load", () => {
      this.expense.receipt = reader.result;
    }, false);

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  private formatMoney(value:any) {
    return accounting.formatMoney(value, '');
  }
}
