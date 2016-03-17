System.register(['angular2/core', 'angular2/http', '../expenses-list/expenses_list.component', '../overview-panel/overview_panel.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, expenses_list_component_1, overview_panel_component_1;
    var OverviewPage;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (expenses_list_component_1_1) {
                expenses_list_component_1 = expenses_list_component_1_1;
            },
            function (overview_panel_component_1_1) {
                overview_panel_component_1 = overview_panel_component_1_1;
            }],
        execute: function() {
            OverviewPage = (function () {
                function OverviewPage() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', http_1.Http)
                ], OverviewPage.prototype, "http", void 0);
                OverviewPage = __decorate([
                    core_1.Component({
                        selector: 'overview-page',
                        template: "\n      <div #toolbar><h1>Expense Manager</h1></div>\n      <div class=\"content\">\n        <expenses-list [http]=\"http\"></expenses-list>\n        <overview-panel></overview-panel>\n      </div>\n    ",
                        directives: [expenses_list_component_1.ExpensesList, overview_panel_component_1.OverviewPanel],
                        styleUrls: ['./app/overview-page/overview_page.css']
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