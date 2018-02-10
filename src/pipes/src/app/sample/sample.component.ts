import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  template: `
  <hr />
  <p>{{name}}</p>
  <p>{{name|lowercase}}</p>
  <p>{{name|uppercase}}</p>
  <p>{{message|titlecase}}</p>
  <p>{{name|slice:3}}</p>
  <p>{{name|slice:3:5}}</p>
  <p>{{person|json}}</p>

  <p>{{5.678|number:'1.2-3'}}</p>
  <p>{{5.678|number:'3.4-5'}}</p>
  <p>{{5.678|number:'3.1-2'}}</p>

  <p>{{0.25|percent}}</p>
  <p>{{0.25|currency}}</p>
  <p>{{0.25|currency:'GBP'}}</p>
  <p>{{0.25|currency:'GBP':'code'}}</p>
  <p>{{0.25|currency:'EUR':'code'}}</p>

  <p>{{date}}</p>
  <p>{{date|date:'short'}}</p>
  <p>{{date|date:'shortDate'}}</p>
  <p>{{date|date:'shortTime'}}</p>
  `,
  styles: []
})
export class SampleComponent implements OnInit {

  public name: string = "AngularJS";
  public message: string = "Welcome to AngularJS";
  public date: Date = new Date();
  public person: object = {
    "first_name": "John",
    "last_name": "Doe"
  }

  constructor() { }

  ngOnInit() { }

}
