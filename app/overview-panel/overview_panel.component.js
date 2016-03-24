System.register(['angular2/core', '../vaadin-bar-chart/vaadin_bar_chart.directive'], function(exports_1, context_1) {
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
    var core_1, vaadin_bar_chart_directive_1;
    var OverviewPanel;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (vaadin_bar_chart_directive_1_1) {
                vaadin_bar_chart_directive_1 = vaadin_bar_chart_directive_1_1;
            }],
        execute: function() {
            OverviewPanel = (function () {
                function OverviewPanel() {
                }
                OverviewPanel = __decorate([
                    core_1.Component({
                        selector: 'overview-panel',
                        templateUrl: './app/overview-panel/overview_panel.component.html',
                        styleUrls: ['./app/overview-panel/overview_panel.component.css'],
                        directives: [vaadin_bar_chart_directive_1.VaadinBarChart]
                    }), 
                    __metadata('design:paramtypes', [])
                ], OverviewPanel);
                return OverviewPanel;
            }());
            exports_1("OverviewPanel", OverviewPanel);
        }
    }
});
//# sourceMappingURL=overview_panel.component.js.map