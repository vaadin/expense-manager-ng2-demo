System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var SearchFilters;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SearchFilters = (function () {
                function SearchFilters() {
                    this.filters = {};
                    this.filtersChange = new core_1.EventEmitter();
                    this.merchants = ["Airline", "Rental car", "Taxi", "Restaurant",
                        "Breakfast", "Office supplies", "Fast food", "Electronics", "Parking",
                        "Hotel", "Shuttle", "Ride sharing"];
                }
                SearchFilters.prototype.filtersChanged = function () {
                    this.filtersChange.emit(this.filters);
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], SearchFilters.prototype, "filtersChange", void 0);
                SearchFilters = __decorate([
                    core_1.Component({
                        selector: 'search-filters',
                        template: "\n    <vaadin-combo-box class=\"merchants\" [items]=\"merchants\" label=\"Merchant\" (value-changed)=\"filters.merchant = $event.target.value; filtersChanged();\"></vaadin-combo-box>\n    <paper-input placeholder=\"Min\" (keyup)=\"filters.min = $event.target.value; filtersChanged();\"></paper-input>\n    <paper-input placeholder=\"Max\" (keyup)=\"filters.max = $event.target.value; filtersChanged();\"></paper-input>\n  ",
                        styleUrls: ['./app/search-filters/search_filters.component.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], SearchFilters);
                return SearchFilters;
            })();
            exports_1("SearchFilters", SearchFilters);
        }
    }
});
//# sourceMappingURL=search_filters.component.js.map