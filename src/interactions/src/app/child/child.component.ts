import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
  <hr />
  <h2>{{"Hello " + name}}</h2>
  <button (click)="fireEvent()">Send Event</button>
  `,
  styles: []
})
export class ChildComponent implements OnInit {

  /*

  @Input()
  public parentData;

  */

  @Input("parentData") 
  public name;

  @Output() 
  public myEvent = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  fireEvent() {
    this.myEvent.emit("[from child component]: fireEvent()");
  }

}
