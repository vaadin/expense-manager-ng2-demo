System.register(['angular2/core', '../vaadin-grid/vaadin_grid.directive'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, vaadin_grid_directive_1;
    var ExpensesList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (vaadin_grid_directive_1_1) {
                vaadin_grid_directive_1 = vaadin_grid_directive_1_1;
            }],
        execute: function() {
            ExpensesList = (function () {
                function ExpensesList() {
                }
                ExpensesList = __decorate([
                    core_1.Component({
                        selector: 'expenses-list',
                        template: "\n      <search-filters #searchfilters>Search filters</search-filters>\n      <vaadin-grid #expenses>\n        <table>\n          <colgroup>\n            <col name=\"date\" width=\"120\" sortable/>\n            <col name=\"merchant\" width=\"200\" sortable/>\n            <col name=\"total\" width=\"150\" sortable/>\n            <col name=\"status\" width=\"150\" sortable/>\n            <col name=\"comment\" sortable/>\n          </colgroup>\n        </table>\n      </vaadin-grid>\n      <button>Add</button>\n    ",
                        directives: [vaadin_grid_directive_1.VaadinGrid]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ExpensesList);
                return ExpensesList;
            })();
            exports_1("ExpensesList", ExpensesList);
        }
    }
});
//# sourceMappingURL=expenses_list.component.js.map