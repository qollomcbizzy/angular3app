import {Component} from '@angular@core';
@Component({
  selector: 'pies',
  template: `
  <div class="row">
  <h2>My favorite pies </h2>
  <div class="row">
  <div class="col-md-5 col-md-offset-2">
  <ul class="pies" *ngFor="let currentpie of favoritepie">
  <li>{{currentpie}}</li>
  </ul>
  </div>
  </div>
  </div>
  `
})
export class PiesListcomponent{
favoritepie :string[]=["mangoes","bananas","apple","peas"];
}
