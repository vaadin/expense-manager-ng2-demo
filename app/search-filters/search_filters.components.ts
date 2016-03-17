import {Component} from 'angular2/core';

@Component({
  selector: 'search-filters',
  template: `
      <vaadin-combo-box label="Merchant"></vaadin-combo-box>
      <div>
        <input placeholder="Min"><input placeholder="Max">
      </div>
      <div>
        <strong>Status</strong>
        <input type="checkbox" name="type" value="new"> New
        <input type="checkbox" name="type" value="inprogress"> In Progress
        <input type="checkbox" name="type" value="reimbursed"> Reimbursed
      </div>
    `
})
export class SearchFilters {

}
