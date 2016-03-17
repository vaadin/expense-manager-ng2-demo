System.register(['angular2/core', '../expenses-list/expenses_list.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, expenses_list_component_1;
    var OverviewPage;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (expenses_list_component_1_1) {
                expenses_list_component_1 = expenses_list_component_1_1;
            }],
        execute: function() {
            OverviewPage = (function () {
                function OverviewPage() {
                }
                OverviewPage = __decorate([
                    core_1.Component({
                        selector: 'overview-page',
                        template: "\n      <div #toolbar><h1>Expense Manager</h1></div>\n      <div #content>\n        <expenses-list></expenses-list>\n      </div>\n    ",
                        directives: [expenses_list_component_1.ExpensesList]
                    }), 
                    __metadata('design:paramtypes', [])
                ], OverviewPage);
                return OverviewPage;
            })();
            exports_1("OverviewPage", OverviewPage);
        }
    }
});
//# sourceMappingURL=overview_page.component.js.map