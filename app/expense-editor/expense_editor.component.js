System.register(['@angular/core', '@vaadin/angular2-polymer'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, angular2_polymer_1;
    var ExpenseEditor;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (angular2_polymer_1_1) {
                angular2_polymer_1 = angular2_polymer_1_1;
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
                    this.closeEditor.emit(false);
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
                ], ExpenseEditor.prototype, "closeEditor");
                ExpenseEditor = __decorate([
                    core_1.Component({
                        selector: 'expense-editor',
                        templateUrl: './app/expense-editor/expense_editor.component.html',
                        styleUrls: ['./app/expense-editor/expense_editor.component.css'],
                        directives: [angular2_polymer_1.PolymerElement('paper-input'), angular2_polymer_1.PolymerElement('vaadin-upload'), angular2_polymer_1.PolymerElement('vaadin-date-picker')]
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