import {Component} from 'angular2/core';
import {OverviewPage} from './overview-page/overview_page.component'

@Component({
    selector: 'expense-app',
    template: '<overview-page></overview-page>',
    directives: [OverviewPage]
})
export class ExpenseApp {

}
