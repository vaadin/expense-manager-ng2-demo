System.register(['angular2/core', '../../bower_components/vaadin-charts/directives/vaadin-charts'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, vaadin_charts_1;
    var OverviewPanel;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (vaadin_charts_1_1) {
                vaadin_charts_1 = vaadin_charts_1_1;
            }],
        execute: function() {
            OverviewPanel = (function () {
                function OverviewPanel() {
                    this.displayPeriod = 12;
                    this.xAxisLabels = new Array(this.displayPeriod + 1);
                    this.monthlyExpenses = new Array(this.displayPeriod + 1);
                }
                ;
                OverviewPanel.prototype.setExpenses = function () {
                    var _this = this;
                    var before = new Date();
                    var after = new Date();
                    after.setFullYear(before.getFullYear() - 1);
                    var url = './api/expenses?index=322&count=&before=' + before.toDateString() +
                        '&after=' + after.toDateString();
                    window.getJSON(url, function (data) { return _this.setData(data); });
                };
                OverviewPanel.prototype.ngOnInit = function () {
                    this.initXAxis();
                    this.setExpenses();
                };
                OverviewPanel.prototype.setData = function (data) {
                    var today = new Date();
                    var totalExpenses = 0;
                    var newMonthlyExpenses = [];
                    for (var i = 0; i <= this.displayPeriod; i++) {
                        newMonthlyExpenses[i] = 0;
                    }
                    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                        var expense = data_1[_i];
                        var expenseDate = new Date(expense.date);
                        var idx = today.getMonth() - expenseDate.getMonth();
                        idx = (idx >= 0) ? idx : (this.displayPeriod + idx);
                        if ((expenseDate.getMonth() == today.getMonth()) && (expenseDate.getFullYear() != today.getFullYear())) {
                            idx = this.displayPeriod;
                        }
                        newMonthlyExpenses[idx] = newMonthlyExpenses[idx] + parseFloat(expense.total);
                        totalExpenses = totalExpenses + parseFloat(expense.total);
                    }
                    this.monthlyExpenses = newMonthlyExpenses;
                    this.totalExpensesInDollar = this.dollarFormat(totalExpenses);
                };
                OverviewPanel.prototype.dollarFormat = function (amount) {
                    var amountInDollar = amount.toFixed(2);
                    var commaPosition = amountInDollar.indexOf(".") - 3;
                    return '$' + amountInDollar.substr(0, commaPosition) + ','
                        + amountInDollar.substr(commaPosition, amountInDollar.length);
                };
                OverviewPanel.prototype.initXAxis = function () {
                    var currentDate = new Date();
                    var currentLabel = currentDate.getFullYear() + " "
                        + currentDate.toDateString().substr(4, 3);
                    for (var i = 0; i <= this.displayPeriod; i++) {
                        this.xAxisLabels[i] = currentLabel;
                        currentDate.setMonth((currentDate.getMonth() - 1));
                        currentLabel = currentDate.toDateString().substr(4, 3);
                        if (currentLabel == "Dec") {
                            currentLabel = currentDate.getFullYear() + " " + currentLabel;
                        }
                    }
                };
                OverviewPanel = __decorate([
                    core_1.Component({
                        selector: 'overview-panel',
                        templateUrl: './app/overview-panel/overview_panel.component.html',
                        styleUrls: ['./app/overview-panel/overview_panel.component.css'],
                        directives: [vaadin_charts_1.VaadinCharts, vaadin_charts_1.DataSeries]
                    }), 
                    __metadata('design:paramtypes', [])
                ], OverviewPanel);
                return OverviewPanel;
            }());
            exports_1("OverviewPanel", OverviewPanel);
        }
    }
});
//# sourceMappingURL=overview_panel.component.js.map