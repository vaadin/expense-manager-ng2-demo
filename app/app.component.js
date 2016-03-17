(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template : `

       <paper-dropdown-menu label="Select Mix" style="margin-top: 10px" >
                            <paper-listbox class="dropdown-content" [selected]="selectedIndex"
                                 (selected-changed)="selectedIndex=$event.detail.value"
                                style="font-size: large" (change)="onChanged($event)">
                                <paper-item *ngFor="#mymix of mixes">{{mymix.name}}</paper-item>
                            </paper-listbox>
                        </paper-dropdown-menu>

      <div>{{selectedIndex}}</div>
      <paper-button (click)="toggleSelected()">click</paper-button>
      `
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));
