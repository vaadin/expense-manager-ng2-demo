System.register(['angular2/core', 'angular2/http', '../vaadin-element/vaadin_element.directive', '../search-filters/search_filters.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, vaadin_element_directive_1, search_filters_component_1;
    var ExpensesList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (vaadin_element_directive_1_1) {
                vaadin_element_directive_1 = vaadin_element_directive_1_1;
            },
            function (search_filters_component_1_1) {
                search_filters_component_1 = search_filters_component_1_1;
            }],
        execute: function() {
            ExpensesList = (function () {
                function ExpensesList() {
                    this.editExpense = new core_1.EventEmitter();
                }
                ExpensesList.prototype.expenses = function (params, callback) {
                    var filters = this.filters || {};
                    var url = './api?index=' + params.index +
                        '&count=' + params.count +
                        '&merchant=' + (filters.merchant || '') +
                        '&min=' + (filters.min || '') +
                        '&max=' + (filters.max || '');
                    //this.http.get(url)
                    //  .subscribe(response => {...});
                    // In this demo we'll use a dummy datasource instead of an actual xhr
                    var totalCount = 2000;
                    totalCount -= filters.merchant ? 1000 : 0;
                    totalCount -= filters.min ? 300 : 0;
                    totalCount -= filters.max ? 300 : 0;
                    window.getJSON(url, function (data) {
                        callback(data, totalCount);
                    });
                };
                ExpensesList.prototype.filtersChange = function (filters, grid) {
                    this.filters = filters;
                    grid.scrollToStart();
                    grid.refreshItems();
                };
                ExpensesList.prototype.selected = function (grid) {
                    var _this = this;
                    var selection = grid.selection.selected();
                    if (selection.length === 1) {
                        grid.selection.clear();
                        grid.getItem(selection[0], function (err, item) {
                            _this.editExpense.emit(item);
                        });
                    }
                };
                ExpensesList.prototype.refreshItems = function (grid) {
                    grid.refreshItems();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', http_1.Http)
                ], ExpensesList.prototype, "http", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], ExpensesList.prototype, "editExpense", void 0);
                ExpensesList = __decorate([
                    core_1.Component({
                        selector: 'expenses-list',
                        templateUrl: './app/expenses-list/expenses_list.component.html',
                        directives: [vaadin_element_directive_1.VaadinElement, search_filters_component_1.SearchFilters]
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