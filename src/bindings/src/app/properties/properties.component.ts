import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-properties',
  template: `
  <hr />
  <h3>Property Databinding</h3>
  <input [id]="identifier" type="text" value="AngularJS" />
  <input [disabled]="isDisabled" id="{{identifier}}" type="text" value="AngularJS" />
  <input bind-disabled="isDisabled" id="{{identifier}}" type="text" value="AngularJS" />
  <br />
  <br />
  `,
  styles: []
})
export class PropertiesComponent implements OnInit {

  public identifier: string = "inputId";
  public isDisabled: boolean = true;

  constructor() { }

  ngOnInit() { }

}
