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
                    this.heading = 'Edit expense';
                    this.expense = { comment: '' };
                    this.items = ['foo', 'bar'];
                    this.closeEditor = new core_1.EventEmitter();
                }
                ExpenseEditor.prototype.onSubmit = function () {
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], ExpenseEditor.prototype, "closeEditor", void 0);
                ExpenseEditor = __decorate([
                    core_1.Component({
                        selector: 'expense-editor',
                        template: "\n    <div class=\"main-layout\">\n      <h2>{{heading}}</h2>\n      <paper-icon-button icon=\"close\" (click)=\"closeEditor.emit()\" class=\"close-button self-start\"></paper-icon-button>\n    </div>\n\n    <div class=\"wrapper\">\n      <div class=\"form\">\n        <form (ngSubmit)=\"onSubmit()\" #expenseForm=\"ngForm\">\n          <paper-input #merchant ngControl=\"merchant\" ngDefaultControl [value]=\"expense.merchant\" (value-changed)=\"expense.merchant=$event.detail.value; merchant.fire('input');\" label=\"Merchant\" auto-validate required error-message=\"Merchant name required\"></paper-input>\n          <paper-input #total ngControl=\"total\" ngDefaultControl [value]=\"expense.total\" (value-changed)=\"expense.total=$event.detail.value; total.fire('input');\" polymer-element label=\"Total\" auto-validate required pattern=\"[0-9,.]+\" error-message=\"Numeric values only\">\n            <div prefix>$</div>\n          </paper-input>\n\n          <vaadin-date-picker #spy ngControl=\"date\" ngDefaultControl name=\"date\" auto-validate required [value]=\"expense.date\" (value-changed)=\"expense.date=$event.detail.value\" label=\"Date\"></vaadin-date-picker>\n\n          <paper-textarea value=\"{{expense.comment}}\" id=\"comment\" name=\"comment\" label=\"Comment\" value=\"\"></paper-textarea>\n\n          <input type=\"file\" accept=\"image/jpeg\" id=\"receiptupload\" name=\"receipt\" capture=\"camera\" hidden>\n          <span id=\"error\">{{errorText}}</span>\n\n        </form>\n      </div>\n\n      <div class=\"receipt\">\n        <vaadin-upload></vaadin-upload>\n      </div>\n    </div>\n    <div class=\"buttons-layout\">\n      <paper-button raised (click)=\"expenseForm.submit()\" class=\"save-button\" [disabled]=\"!expenseForm.form.valid\">Save</paper-button>\n      <paper-button (click)=\"closeEditor.emit()\" class=\"cancel-button\">Cancel</paper-button>\n      <paper-button (click)=\"_delete\" id=\"delete\" class=\"delete-button\">Delete</paper-button>\n    </div>\n  ",
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