System.register(['@angular/core', './overview-page/overview_page.component'], function(exports_1) {
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
    var core_1, overview_page_component_1;
    var ExpenseApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (overview_page_component_1_1) {
                overview_page_component_1 = overview_page_component_1_1;
            }],
        execute: function() {
            ExpenseApp = (function () {
                function ExpenseApp() {
                }
                ExpenseApp = __decorate([
                    core_1.Component({
                        selector: 'expense-app',
                        template: '<overview-page></overview-page>',
                        styles: ["\n        :host {\n          display: block;\n          height: 100%;\n        }\n      "],
                        directives: [overview_page_component_1.OverviewPage]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ExpenseApp);
                return ExpenseApp;
            })();
            exports_1("ExpenseApp", ExpenseApp);
        }
    }
});
//# sourceMappingURL=expense_app.component.js.map