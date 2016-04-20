import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {VaadinCharts, DataSeries } from 'vaadin-charts';

@Component({
    selector: 'overview-panel',
    templateUrl: './app/overview-panel/overview_panel.component.html',
    styleUrls: ['./app/overview-panel/overview_panel.component.css'],
    directives: [VaadinCharts, DataSeries]
})
export class OverviewPanel implements OnInit {

    private displayPeriod: number;
    private totalExpenses: number;
    private xAxisLabels: string[];
    private monthlyExpenses: number[];

    constructor() {
        this.displayPeriod = 12;
        this.totalExpenses = 0;
        this.xAxisLabels = new Array(this.displayPeriod + 1);
        this.monthlyExpenses = new Array(this.displayPeriod + 1);
        for (var i = 0; i <= this.displayPeriod; i++) {
            this.monthlyExpenses[i] = 0;
        }
    };

    ngOnInit() {
        this.initXAxis();
        const url = './api/expenses?index=322&count=2000&merchant=&min=&max=';
        window.getJSON(url, (data) => this.initData(data));
    }

    initData(data: string[]) {
        let today = new Date();
        for (var expense of data) {
            let expenseDate = new Date(expense.date);
            if (this.monthDiff(expenseDate, today) <= this.displayPeriod) {
                let idx = today.getMonth() - expenseDate.getMonth();
                idx = (idx >= 0) ? idx : (this.displayPeriod + idx);
                if ((expenseDate.getMonth() == today.getMonth()) && (expenseDate.getFullYear() != today.getFullYear())) {
                    idx = this.displayPeriod;
                }
                this.monthlyExpenses[idx] = this.monthlyExpenses[idx] + expense.total;
                this.totalExpenses = this.totalExpenses + expense.total;
            }
        }
    }

    monthDiff(fromDate: Date, toDate: Date) {
        let months;
        months = (toDate.getFullYear() - fromDate.getFullYear()) * 12;
        months -= fromDate.getMonth();
        months += toDate.getMonth()
        return months <= 0 ? 0 : months;
    }

    initXAxis() {
        let currentDate = new Date();
        let currentLabel = currentDate.getFullYear() + " "
            + currentDate.toDateString().substr(4, 3);
        for (var i = 0; i <= this.displayPeriod; i++) {
            this.xAxisLabels[i] = currentLabel;
            currentDate.setMonth((currentDate.getMonth() - 1));
            currentLabel = currentDate.toDateString().substr(4, 3);
            if (currentLabel == "Dec") {
                currentLabel = currentDate.getFullYear() + " " + currentLabel;
            }
        }
    }
}
