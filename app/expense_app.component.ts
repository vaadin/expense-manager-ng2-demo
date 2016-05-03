import {Component} from '@angular/core';
import {OverviewPage} from './overview-page/overview_page.component'

@Component({
    selector: 'expense-app',
    template: '<overview-page></overview-page>',
    styles: [`
        :host {
          display: block;
          height: 100%;
        }
      `],
    directives: [OverviewPage]
})
export class ExpenseApp {

}
