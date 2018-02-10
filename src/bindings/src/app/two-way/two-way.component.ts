import { Component, OnInit } from '@angular/core';

/* We need to import FormsModule in app.module.ts */

@Component({
  selector: 'app-two-way',
  template: `
  <hr />
  <h3>Two-Way Binding</h3>
  <input [(ngModel)]="message" type="text" />
  <p>{{message}}</p>
  `,
  styles: []
})
export class TwoWayComponent implements OnInit {

  public message: string = "";

  constructor() { }

  ngOnInit() {}

}
