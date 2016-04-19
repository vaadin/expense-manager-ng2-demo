import {Component, EventEmitter, Output, Input} from 'angular2/core';
import {VaadinComboBox} from '../../bower_components/vaadin-combo-box/directives/vaadin-combo-box';
import {VaadinDatePicker} from '../../bower_components/vaadin-date-picker/directives/vaadin-date-picker';

@Component({
  selector: 'search-filters',
  template: `
    <div class="toolbar" (click)="toggleFilters = !toggleFilters">
      Filters
      <iron-icon icon="filter-list"></iron-icon>
    </div>
    <div class="filters" [ngClass]="{open: toggleFilters}">
      <div class="row">
        <div class="dates">
          <vaadin-date-picker label="After" (valueChange)="filtersChanged()" [(value)]="filters.after"></vaadin-date-picker>
          <vaadin-date-picker label="Before" (valueChange)="filtersChanged()" [(value)]="filters.before"></vaadin-date-picker>
        </div>
        <vaadin-combo-box class="merchants" [items]="merchants" label="Merchant" (valueChange)="filtersChanged()" [(value)]="filters.merchant"></vaadin-combo-box>
      </div>
      <div class="row">
        <div class="amounts">
          <paper-input placeholder="Min ($)" (keyup)="filters.min = $event.target.value; filtersChanged();"></paper-input>
          <paper-input placeholder="Max ($)" (keyup)="filters.max = $event.target.value; filtersChanged();"></paper-input>
        </div>
        <div class="checkboxes">
          <span class="caption">Status</span>
          <paper-checkbox (change)="updateStatus($event); filtersChanged();" name="new">New</paper-checkbox>
          <paper-checkbox (change)="updateStatus($event); filtersChanged();" name="in_progress">In progress</paper-checkbox>
          <paper-checkbox (change)="updateStatus($event); filtersChanged();" name="reimbursed">Reimbursed</paper-checkbox>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./app/search-filters/search_filters.component.css'],
  directives: [VaadinComboBox, VaadinDatePicker]
})
export class SearchFilters {

  filters: any = {};

  @Output() filtersChange = new EventEmitter();

  @Input() merchants: string[];

  private updateStatus(e) {
    const status = e.target.name;
    const toggle = e.target.checked;

    if (!this.filters.statuses) {
      this.filters.statuses = [];
    }

    if (toggle) {
      this.filters.statuses.push(status)
    } else {
      this.filters.statuses.splice(this.filters.statuses.indexOf(status), 1);
    }
  }

  private filtersChanged() {
    this.filtersChange.emit(this.filters);
  }

}
