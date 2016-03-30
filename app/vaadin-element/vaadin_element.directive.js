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
    var VaadinElement;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            /*
            * This directive aims to overcome the current issues in integrating vaadin-elements to an Angular 2 app.
            */
            VaadinElement = (function () {
                function VaadinElement(viewContainer) {
                    var _this = this;
                    this.viewContainer = viewContainer;
                    this.stopper = function (e) {
                        e.stopPropagation();
                    };
                    this.element = viewContainer.element.nativeElement;
                    /*
                    * common workarounds
                    */
                    // Move all elements targeted to light dom to the actual light dom with Polymer apis
                    var misplaced = this.element.querySelectorAll("*:not(.style-scope)");
                    [].forEach.call(misplaced, function (e) {
                        if (e.parentElement === _this.element) {
                            Polymer.dom(_this.element).appendChild(e);
                        }
                    });
                    /*
                    * vaadin-grid workarounds
                    */
                    if (this.element.is === 'vaadin-grid') {
                        // Need to stop selected-items-changed events during grid init to
                        // avoid "Attempt to use a dehydrated detector" error.
                        window.addEventListener('selected-items-changed', this.stopper, true);
                        // vaadin-grid 1.0 doesn't support placing a configuration table dynamically. A hacky workaround needed for now.
                        var _c = this.element._grid.c;
                        try {
                            this.element._grid.c = null;
                            this.element._grid.init(this.element, this.element._findTableElement(Polymer.dom(this.element).children), Polymer.dom(this.element.root), this.element.$.measureobject);
                        }
                        catch (e) {
                        }
                        this.element._grid.c = _c;
                    }
                    /*
                    * Common workarounds for vaadin-combo-box and vaadin-date-picker
                    */
                    if (this.element.is === 'vaadin-combo-box' || this.element.is === 'vaadin-date-picker') {
                        // Need to fire 'input' event manually so ngControl can react to changes
                        this.element.addEventListener('value-changed', function () {
                            _this.element.fire('input');
                        });
                        // Need to fire 'blur' event manually so ngControl can react to changes
                        this.element.$$('paper-input-container').addEventListener('blur', function () {
                            if (!_this.element.opened && !_this.element._opened) {
                                _this.element.fire('blur');
                            }
                        });
                    }
                    /*
                    * Vaadin Charts workarounds
                    */
                    if (this.element.reloadConfiguration) {
                        // Charts need reloadConfiguration called if light dom configuration changes dynamically
                        this.element.reloadConfiguration();
                    }
                }
                VaadinElement.prototype.ngOnInit = function () {
                    window.removeEventListener('selected-items-changed', this.stopper, true);
                };
                VaadinElement = __decorate([
                    core_1.Directive({
                        selector: 'vaadin-grid, vaadin-combo-box, vaadin-date-picker, vaadin-upload, [vaadin-element]'
                    }), 
                    __metadata('design:paramtypes', [core_1.ViewContainerRef])
                ], VaadinElement);
                return VaadinElement;
            })();
            exports_1("VaadinElement", VaadinElement);
        }
    }
});
//# sourceMappingURL=vaadin_element.directive.js.map