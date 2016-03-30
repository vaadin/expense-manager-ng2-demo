System.register(['angular2/core', '../polymer-element/polymer_element.directive', '../vaadin-element/vaadin_element.directive'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, polymer_element_directive_1, vaadin_element_directive_1;
    var ExpenseEditor;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (polymer_element_directive_1_1) {
                polymer_element_directive_1 = polymer_element_directive_1_1;
            },
            function (vaadin_element_directive_1_1) {
                vaadin_element_directive_1 = vaadin_element_directive_1_1;
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
                    this.closeEditor.emit();
                    this.expense = {};
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], ExpenseEditor.prototype, "closeEditor", void 0);
                ExpenseEditor = __decorate([
                    core_1.Component({
                        selector: 'expense-editor',
                        template: "\n    <div class=\"main-layout\">\n      <h2>Edit expense</h2>\n      <paper-icon-button icon=\"close\" (click)=\"close()\" class=\"close-button self-start\"></paper-icon-button>\n    </div>\n\n    <div class=\"wrapper\">\n      <div class=\"form\">\n        <form (ngSubmit)=\"onSubmit($event.value)\" #expenseForm=\"ngForm\">\n          <paper-input #merchant ngControl=\"merchant\" ngDefaultControl [value]=\"expense.merchant\" (value-changed)=\"merchant.fire('input');\" label=\"Merchant\" auto-validate required error-message=\"Merchant name required\"></paper-input>\n          <paper-input #total ngControl=\"total\" ngDefaultControl [value]=\"expense.total\" (value-changed)=\"total.fire('input');\" polymer-element label=\"Total\" auto-validate required pattern=\"[0-9,.]+\" error-message=\"Numeric values only\">\n            <div prefix>$</div>\n          </paper-input>\n\n          <vaadin-date-picker ngControl=\"date\" ngDefaultControl auto-validate required [value]=\"expense.date\" label=\"Date\"></vaadin-date-picker>\n\n          <paper-textarea #comment ngControl=\"comment\" ngDefaultControl [value]=\"expense.comment\" (value-changed)=\"comment.fire('input');\" label=\"Comment\"></paper-textarea>\n\n          <vaadin-upload></vaadin-upload>\n        </form>\n      </div>\n\n      <div class=\"receipt\">\n\n      </div>\n    </div>\n    <div class=\"buttons-layout\">\n      <paper-button raised [disabled]=\"!expenseForm.form.valid\" (click)=\"expenseForm.ngSubmit.emit(expenseForm)\">Save</paper-button>\n      <paper-button (click)=\"close()\">Cancel</paper-button>\n    </div>\n  ",
                        styles: ["\n      .main-layout {\n        display: flex;\n        justify-content: space-between;\n      }\n\n      paper-icon-button {\n        height: 28px;\n        width: 28px;\n      }\n\n      .wrapper {\n        display: flex;\n        flex: 1;\n        overflow: auto;\n      }\n\n      .form {\n        flex: 2;\n        padding-right: 24px;\n      }\n\n      .receipt {\n        flex: 3;\n        background: #F7F8F8;\n      }\n    "],
                        directives: [polymer_element_directive_1.PolymerElement, vaadin_element_directive_1.VaadinElement]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ExpenseEditor);
                return ExpenseEditor;
            })();
            exports_1("ExpenseEditor", ExpenseEditor);
        }
    }
});
//# sourceMappingURL=expense_editor.component.js.map