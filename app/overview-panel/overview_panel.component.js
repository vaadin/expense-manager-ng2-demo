System.register(['angular2/core', 'vaadin-charts'], function(exports_1, context_1) {
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
                    this.totalExpenses = 0;
                    this.xAxisLabels = new Array(this.displayPeriod + 1);
                    this.monthlyExpenses = new Array(this.displayPeriod + 1);
                    for (var i = 0; i <= this.displayPeriod; i++) {
                        this.monthlyExpenses[i] = 0;
                    }
                }
                ;
                OverviewPanel.prototype.ngOnInit = function () {
                    var _this = this;
                    this.initXAxis();
                    var url = './api/expenses?index=322&count=2000&merchant=&min=&max=';
                    window.getJSON(url, function (data) { return _this.initData(data); });
                };
                OverviewPanel.prototype.initData = function (data) {
                    var today = new Date();
                    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                        var expense = data_1[_i];
                        var expenseDate = new Date(expense.date);
                        if (this.monthDiff(expenseDate, today) <= this.displayPeriod) {
                            var idx = today.getMonth() - expenseDate.getMonth();
                            idx = (idx >= 0) ? idx : (this.displayPeriod + idx);
                            if ((expenseDate.getMonth() == today.getMonth()) && (expenseDate.getFullYear() != today.getFullYear())) {
                                idx = this.displayPeriod;
                            }
                            this.monthlyExpenses[idx] = this.monthlyExpenses[idx] + expense.total;
                            this.totalExpenses = this.totalExpenses + expense.total;
                        }
                    }
                };
                OverviewPanel.prototype.monthDiff = function (fromDate, toDate) {
                    var months;
                    months = (toDate.getFullYear() - fromDate.getFullYear()) * 12;
                    months -= fromDate.getMonth();
                    months += toDate.getMonth();
                    return months <= 0 ? 0 : months;
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