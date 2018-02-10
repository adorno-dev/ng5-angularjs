import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  template: `
  <hr />
  <h3>Event Binding</h3>
  <button (click)="onClick($event)">Greet</button>
  <button (click)="greeting='Welcome to AngularJS'">Greet</button>
  <p>{{greeting}}</p>
  `,
  styles: []
})
export class EventsComponent implements OnInit {

  public greeting: string = "";

  constructor() { }

  ngOnInit() { }

  onClick(event) {
    console.log(event);
    this.greeting = "Welcome to AngularJS (NG5)";
    /* this.greeting = event.type; */
  }

}
