System.register(['angular2/platform/browser', './expense_app.component'], function(exports_1) {
    var browser_1, expense_app_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (expense_app_component_1_1) {
                expense_app_component_1 = expense_app_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(expense_app_component_1.ExpenseApp);
        }
    }
});
//# sourceMappingURL=main.js.map