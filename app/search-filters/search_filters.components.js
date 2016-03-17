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
                }
                SearchFilters = __decorate([
                    core_1.Component({
                        selector: 'search-filters',
                        template: "\n      <vaadin-combo-box label=\"Merchant\"></vaadin-combo-box>\n      <div>\n        <input placeholder=\"Min\"><input placeholder=\"Max\">\n      </div>\n      <div>\n        <strong>Status</strong>\n        <input type=\"checkbox\" name=\"type\" value=\"new\"> New\n        <input type=\"checkbox\" name=\"type\" value=\"inprogress\"> In Progress\n        <input type=\"checkbox\" name=\"type\" value=\"reimbursed\"> Reimbursed\n      </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], SearchFilters);
                return SearchFilters;
            })();
            exports_1("SearchFilters", SearchFilters);
        }
    }
});
//# sourceMappingURL=search_filters.components.js.map