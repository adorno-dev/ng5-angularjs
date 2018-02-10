import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  template: `
  <hr />
  <h3>*ngFor Statement</h3>

  <!-- <div *ngFor="let color of colors; index as i"> -->
  <!-- <div *ngFor="let color of colors; first as f"> -->
  <!-- <div *ngFor="let color of colors; last as l"> -->
  <!-- <div *ngFor="let color of colors; odd as o"> -->
  <!-- <div *ngFor="let color of colors; even as e"> -->
  <div *ngFor="let color of colors; index as i">
    <div>{{i}} - {{color}}</div>
  </div>

  `,
  styles: []
})
export class NgForComponent implements OnInit {

  public colors = ["red", "blue", "green", "yellow"];

  constructor() { }

  ngOnInit() { }

}
