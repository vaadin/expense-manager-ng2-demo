System.register(['@angular/core', '@vaadin/angular2-polymer'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, angular2_polymer_1;
    var OverviewPanel;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (angular2_polymer_1_1) {
                angular2_polymer_1 = angular2_polymer_1_1;
            }],
        execute: function() {
            OverviewPanel = (function () {
                function OverviewPanel() {
                    this.displayPeriod = 12;
                    this.monthlyExpenses = new Array(this.displayPeriod + 1);
                }
                ;
                OverviewPanel.prototype.setExpenses = function () {
                    var _this = this;
                    var before = new Date();
                    var after = new Date();
                    after.setFullYear(before.getFullYear() - 1);
                    var url = './api/expenses?index=322&count=&before=' + before.toISOString() +
                        '&after=' + after.toISOString();
                    window.getJSON(url, function (data) { return _this.setData(data); });
                };
                OverviewPanel.prototype.ngOnInit = function () {
                    this.setExpenses();
                };
                OverviewPanel.prototype.setData = function (data) {
                    var today = new Date();
                    var totalExpenses = 0;
                    var newMonthlyExpenses = [];
                    for (var i = 0; i <= this.displayPeriod; i++) {
                        newMonthlyExpenses[i] = { 'y': 0 };
                    }
                    for (var _i = 0; _i < data.length; _i++) {
                        var expense = data[_i];
                        var expenseDate = new Date(expense.date);
                        var idx = today.getMonth() - expenseDate.getMonth();
                        idx = (idx >= 0) ? idx : (this.displayPeriod + idx);
                        if ((expenseDate.getMonth() == today.getMonth()) && (expenseDate.getFullYear() != today.getFullYear())) {
                            idx = this.displayPeriod;
                        }
                        if (typeof expense.total === 'string') {
                            //Edit expense saves total as string and with unnecessary ,.
                            expense.total = parseFloat(expense.total.replace(',', ''));
                        }
                        newMonthlyExpenses[idx].y = newMonthlyExpenses[idx].y + expense.total;
                        totalExpenses = totalExpenses + expense.total;
                    }
                    var currentDate = new Date();
                    var currentLabel = currentDate.getFullYear() + " "
                        + currentDate.toDateString().substr(4, 3);
                    for (var i = 0; i <= this.displayPeriod; i++) {
                        newMonthlyExpenses[i].name = currentLabel;
                        currentDate.setMonth((currentDate.getMonth() - 1));
                        currentLabel = currentDate.toDateString().substr(4, 3);
                        if (currentLabel == "Dec") {
                            currentLabel = currentDate.getFullYear() + " " + currentLabel;
                        }
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
                OverviewPanel = __decorate([
                    core_1.Component({
                        selector: 'overview-panel',
                        templateUrl: './app/overview-panel/overview_panel.component.html',
                        styleUrls: ['./app/overview-panel/overview_panel.component.css'],
                        directives: [angular2_polymer_1.PolymerElement('data-series'), angular2_polymer_1.PolymerElement('vaadin-bar-chart')]
                    }), 
                    __metadata('design:paramtypes', [])
                ], OverviewPanel);
                return OverviewPanel;
            })();
            exports_1("OverviewPanel", OverviewPanel);
        }
    }
});
//# sourceMappingURL=overview_panel.component.js.map