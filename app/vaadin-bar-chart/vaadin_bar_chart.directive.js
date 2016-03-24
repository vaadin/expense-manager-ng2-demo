System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var VaadinBarChart;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            /*
            * This directive aims to overcome the current issues in integrating vaadin-bar-chart to an Angular 2 app.
            */
            VaadinBarChart = (function () {
                function VaadinBarChart(viewContainer) {
                    this.viewContainer = viewContainer;
                    var chart = viewContainer.element.nativeElement;
                    var selector = "vaadin-bar-chart";
                    var localDoms = ["chart-title", "subtitle", "x-axis", "y-axis", "tooltip", "plot-options", "legend", "data-series"];
                    for (var _i = 0, localDoms_1 = localDoms; _i < localDoms_1.length; _i++) {
                        var ld = localDoms_1[_i];
                        var localDom = chart.querySelector(ld + ":not(." + selector + ")");
                        if (localDom) {
                            Polymer.dom(chart).appendChild(localDom);
                        }
                    }
                    chart.reloadConfiguration();
                }
                VaadinBarChart = __decorate([
                    core_1.Directive({
                        selector: 'vaadin-bar-chart'
                    }), 
                    __metadata('design:paramtypes', [core_1.ViewContainerRef])
                ], VaadinBarChart);
                return VaadinBarChart;
            }());
            exports_1("VaadinBarChart", VaadinBarChart);
        }
    }
});
//# sourceMappingURL=vaadin_bar_chart.directive.js.map