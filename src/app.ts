//our root app component
import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {Mix} from './apptypes' ;
@Component({
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
  <button (click)="toggleSelected()">click</button>
  `
})
export class App {
  someVarFromComponent = 'Hello!';
  mixes : Mix[] = [];
  constructor() {
    var mix : Mix ;

    mix = new Mix() ;
    mix.name = "First Mix" ;
    this.mixes.push(mix) ;

    mix = new Mix() ;
    mix.name = "2nd Mix" ;
    this.mixes.push(mix) ;

  }
  onChanged(val:any) {
    console.log(val) ;
  }

    toggleSelected() {
      if(this._selectedIndex) {
        this._selectedIndex = 0;
      } else {
        this._selectedIndex = 1;
      }
    }
     private _selectedIndex:number = 1 ;

    get selectedIndex() {
        console.log("-- getSelectedIndex--",this._selectedIndex);
        return this._selectedIndex ;
    }
    set selectedIndex(val:number) {
        this._selectedIndex = val;
        console.log("-- setSelectedIndex--",this._selectedIndex) ;
    }

    onDropDownChanged(val:any) {
        console.log("onDropDownChanged",val) ;
    }


}

bootstrap(App).catch(err => console.error(err));
