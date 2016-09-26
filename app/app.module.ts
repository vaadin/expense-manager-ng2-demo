import { NgModule, CUSTOM_ELEMENTS_SCHEMA, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { PolymerElement } from '@vaadin/angular2-polymer';

import { ExpenseApp } from './expense_app.component';
import { OverviewPage } from './overview-page/overview_page.component';
import { ExpenseEditor } from './expense-editor/expense_editor.component';
import { ExpensesList } from './expenses-list/expenses_list.component';
import { OverviewPanel } from './overview-panel/overview_panel.component';
import { SearchFilters } from './search-filters/search_filters.component';

if((<any>window).location.href.indexOf('demo.vaadin.com') > -1) {
  enableProdMode();
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
   ],
  declarations: [
    ExpenseApp,
    OverviewPage,
    ExpenseEditor,
    ExpensesList,
    OverviewPanel,
    SearchFilters,
    PolymerElement('paper-checkbox'),
    PolymerElement('paper-dialog'),
    PolymerElement('paper-icon-button'),
    PolymerElement('paper-input'),
    PolymerElement('paper-textarea'),
    PolymerElement('paper-toast'),
    PolymerElement('chart-element'),
    PolymerElement('vaadin-combo-box'),
    PolymerElement('vaadin-date-picker'),
    PolymerElement('vaadin-grid'),
    PolymerElement('vaadin-upload')
  ],
  bootstrap: [ ExpenseApp ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
