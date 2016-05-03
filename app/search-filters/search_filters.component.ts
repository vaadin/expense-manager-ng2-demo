import {Component, EventEmitter, Output, Input} from 'angular2/core';
import {PolymerElement} from 'vaadin-ng2-polymer/polymer-element'

@Component({
  selector: 'search-filters',
  template: `
    <div class="toolbar" (click)="toggleFilters = !toggleFilters" [ngClass]="{open: toggleFilters}">
      Filters
      <iron-icon icon="filter-list"></iron-icon>
      <div class="badge">{{activeFilterCount}}</div>
    </div>
    <div class="filters" [ngClass]="{open: toggleFilters}">
      <div class="row">
        <div class="dates col">
          <vaadin-date-picker label="After" [(value)]="filters.after" (valueChange)="filtersChanged()"></vaadin-date-picker>
          <vaadin-date-picker label="Before" [(value)]="filters.before" (valueChange)="filtersChanged()"></vaadin-date-picker>
        </div>
        <div class="merchants col">
          <vaadin-combo-box class="merchants" [items]="merchants" label="Merchant" [(value)]="filters.merchant" (valueChange)="filtersChanged()"></vaadin-combo-box>
        </div>
      </div>
      <div class="row">
        <div class="amounts col">
          <paper-input placeholder="Min ($)" (keyup)="filters.min = $event.target.value; filtersChanged();"></paper-input>
          <paper-input placeholder="Max ($)" (keyup)="filters.max = $event.target.value; filtersChanged();"></paper-input>
        </div>
        <div class="checkboxes col">
          <span class="caption">Status</span>
          <paper-checkbox (change)="updateStatus($event); filtersChanged();" name="new">New</paper-checkbox>
          <paper-checkbox (change)="updateStatus($event); filtersChanged();" name="in_progress">In progress</paper-checkbox>
          <paper-checkbox (change)="updateStatus($event); filtersChanged();" name="reimbursed">Reimbursed</paper-checkbox>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./app/search-filters/search_filters.component.css'],
  directives: [PolymerElement('vaadin-combo-box'), PolymerElement('vaadin-date-picker')]
})

export class SearchFilters {

  filters: any = {};

  @Output() filtersChange = new EventEmitter();

  @Input() merchants: string[];

  activeFilterCount = 0;

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

    // Count active filters.
    this.activeFilterCount = ['after', 'before', 'merchant', 'min', 'max', 'statuses'].filter((field) => {
      return this.filters[field] && this.filters[field].length > 0;
    }).length;
  }

}
