import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-styles',
  template: `
  <hr />
  <h3>Style Binding</h3>
  <ul>
    <li [style.color]="'cyan'">Style #1</li>
    <li [style.color]="has_error ? '#f00' : 'green'">Style #2</li>
    <li [style.color]="highlight_color">Style #3</li>
    <li [ngStyle]="title_styles">Style #4</li>
  </ul>
  `,
  styles: []
})
export class StylesComponent implements OnInit {

  public has_error: boolean = false;
  public is_special: boolean = true;
  public highlight_color: string = "orange";
  public title_styles: object = {
    color: "#00f",
    fontStyle: "italic"
  }

  constructor() { }

  ngOnInit() { }

}
