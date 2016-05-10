System.register(['angular2/core', 'vaadin-ng2-polymer/polymer-element'], function(exports_1, context_1) {
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
    var core_1, polymer_element_1;
    var ExpenseEditor;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (polymer_element_1_1) {
                polymer_element_1 = polymer_element_1_1;
            }],
        execute: function() {
            ExpenseEditor = (function () {
                function ExpenseEditor() {
                    this.expense = {};
                    this.closeEditor = new core_1.EventEmitter();
                }
                ExpenseEditor.prototype.onSubmit = function (updated) {
                    // Should save changes to some backend API probably
                    // but we'll just update the object in this demo instead
                    Object.assign(this.expense, updated);
                    this.close();
                };
                ExpenseEditor.prototype.close = function () {
                    var _this = this;
                    this.closeEditor.emit();
                    setTimeout(function () {
                        _this.expense = {};
                    }, 100);
                };
                ExpenseEditor.prototype.upload = function (e) {
                    var _this = this;
                    var file = e.detail.file;
                    var reader = new FileReader();
                    reader.addEventListener("load", function () {
                        _this.expense.receipt = reader.result;
                    }, false);
                    if (file) {
                        reader.readAsDataURL(file);
                    }
                };
                ExpenseEditor.prototype.formatMoney = function (value) {
                    return accounting.formatMoney(value, '');
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], ExpenseEditor.prototype, "closeEditor", void 0);
                ExpenseEditor = __decorate([
                    core_1.Component({
                        selector: 'expense-editor',
                        templateUrl: './app/expense-editor/expense_editor.component.html',
                        styleUrls: ['./app/expense-editor/expense_editor.component.css'],
                        directives: [polymer_element_1.PolymerElement('paper-input'), polymer_element_1.PolymerElement('vaadin-upload'), polymer_element_1.PolymerElement('vaadin-date-picker')]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ExpenseEditor);
                return ExpenseEditor;
            }());
            exports_1("ExpenseEditor", ExpenseEditor);
        }
    }
});
//# sourceMappingURL=expense_editor.component.js.map