System.register(['angular2/core', '../../bower_components/vaadin-combo-box/directives/vaadin-combo-box', '../../bower_components/vaadin-date-picker/directives/vaadin-date-picker'], function(exports_1, context_1) {
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
    var core_1, vaadin_combo_box_1, vaadin_date_picker_1;
    var SearchFilters;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (vaadin_combo_box_1_1) {
                vaadin_combo_box_1 = vaadin_combo_box_1_1;
            },
            function (vaadin_date_picker_1_1) {
                vaadin_date_picker_1 = vaadin_date_picker_1_1;
            }],
        execute: function() {
            SearchFilters = (function () {
                function SearchFilters() {
                    this.filters = {};
                    this.filtersChange = new core_1.EventEmitter();
                }
                SearchFilters.prototype.filtersChanged = function () {
                    this.filtersChange.emit(this.filters);
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], SearchFilters.prototype, "filtersChange", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], SearchFilters.prototype, "merchants", void 0);
                SearchFilters = __decorate([
                    core_1.Component({
                        selector: 'search-filters',
                        template: "\n    <div class=\"row\">\n      <vaadin-date-picker label=\"After\" (valueChange)=\"filtersChanged()\" [(value)]=\"filters.after\"></vaadin-date-picker>\n      <vaadin-date-picker label=\"Before\" (valueChange)=\"filtersChanged()\" [(value)]=\"filters.before\"></vaadin-date-picker>\n      <vaadin-combo-box class=\"merchants\" [items]=\"merchants\" label=\"Merchant\" (valueChange)=\"filtersChanged()\" [(value)]=\"filters.merchant\"></vaadin-combo-box>\n    </div>\n    <div class=\"row\">\n      <paper-input placeholder=\"Min ($)\" (keyup)=\"filters.min = $event.target.value; filtersChanged();\"></paper-input>\n      <paper-input placeholder=\"Max ($)\" (keyup)=\"filters.max = $event.target.value; filtersChanged();\"></paper-input>\n    </div>\n  ",
                        styleUrls: ['./app/search-filters/search_filters.component.css'],
                        directives: [vaadin_combo_box_1.VaadinComboBox, vaadin_date_picker_1.VaadinDatePicker]
                    }), 
                    __metadata('design:paramtypes', [])
                ], SearchFilters);
                return SearchFilters;
            }());
            exports_1("SearchFilters", SearchFilters);
        }
    }
});
//# sourceMappingURL=search_filters.component.js.map