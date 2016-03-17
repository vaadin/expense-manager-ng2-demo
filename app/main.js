System.register(['angular2/platform/browser', './expense_app.component', 'angular2/http'], function(exports_1) {
    var browser_1, expense_app_component_1, http_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (expense_app_component_1_1) {
                expense_app_component_1 = expense_app_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(expense_app_component_1.ExpenseApp, [http_1.HTTP_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=main.js.map