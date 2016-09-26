import { Component } from '@angular/core';

@Component({
  selector: 'expense-app',
  template: '<overview-page></overview-page>',
  styles: [`
    :host {
      display: block;
      height: 100%;
    }
  `]
})
export class ExpenseApp { }
