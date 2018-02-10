import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  template: `
  <hr />
  <h3>*ngSwitch Statement</h3>
  <div [ngSwitch]="color">
    <span *ngSwitchCase="'red'">Picked RED color</span>
    <span *ngSwitchCase="'blue'">Picked BLUE color</span>
    <span *ngSwitchCase="'green'">Picked GREEN color</span>
    <span *ngSwitchDefault>Default color</span>
  </div>
  `,
  styles: []
})
export class NgSwitchComponent implements OnInit {

  public color: string = "red";

  constructor() { }

  ngOnInit() { }

}
