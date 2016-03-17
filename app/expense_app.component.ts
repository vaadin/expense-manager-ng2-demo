import {Component} from 'angular2/core';
import {Http} from 'angular2/http';
import {OverviewPage} from './overview-page/overview_page.component'

@Component({
    selector: 'expense-app',
    template: '<overview-page [http]="http"></overview-page>',
    directives: [OverviewPage]
})
export class ExpenseApp {

  constructor(public http: Http) {

  }
}
