"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var angular2_polymer_1 = require('@vaadin/angular2-polymer');
var expense_app_component_1 = require('./expense_app.component');
var overview_page_component_1 = require('./overview-page/overview_page.component');
var expense_editor_component_1 = require('./expense-editor/expense_editor.component');
var expenses_list_component_1 = require('./expenses-list/expenses_list.component');
var overview_panel_component_1 = require('./overview-panel/overview_panel.component');
var search_filters_component_1 = require('./search-filters/search_filters.component');
if (window.location.href.indexOf('demo.vaadin.com') > -1) {
    core_1.enableProdMode();
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule
            ],
            declarations: [
                expense_app_component_1.ExpenseApp,
                overview_page_component_1.OverviewPage,
                expense_editor_component_1.ExpenseEditor,
                expenses_list_component_1.ExpensesList,
                overview_panel_component_1.OverviewPanel,
                search_filters_component_1.SearchFilters,
                angular2_polymer_1.PolymerElement('paper-checkbox'),
                angular2_polymer_1.PolymerElement('paper-dialog'),
                angular2_polymer_1.PolymerElement('paper-icon-button'),
                angular2_polymer_1.PolymerElement('paper-input'),
                angular2_polymer_1.PolymerElement('paper-textarea'),
                angular2_polymer_1.PolymerElement('paper-toast'),
                angular2_polymer_1.PolymerElement('vaadin-bar-chart'),
                angular2_polymer_1.PolymerElement('vaadin-combo-box'),
                angular2_polymer_1.PolymerElement('vaadin-date-picker'),
                angular2_polymer_1.PolymerElement('vaadin-grid'),
                angular2_polymer_1.PolymerElement('vaadin-upload')
            ],
            bootstrap: [expense_app_component_1.ExpenseApp],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map