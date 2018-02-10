import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  template: `
    <hr />
    <p>{{message}}</p>
    <p>{{3+7}}</p>
    <p>{{"[from message variable]: " + message}}</p>
    <p>{{message.length}}</p>
    <p>{{message.toUpperCase()}}</p>
    <p>{{welcomeMethod()}}</p>
    <p>{{location}}</p>
  `,
  styles: []
})
export class SampleComponent implements OnInit {

  public name: string = "Interpolations";
  public message: string = "This is an interpolation example.";
  public location: string = window.location.href;

  welcomeMethod() {
    return "Welcome to " + this.name;
  }

  constructor() { }

  ngOnInit() { }

}
