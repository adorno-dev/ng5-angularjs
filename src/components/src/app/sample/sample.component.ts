import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  /*
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
  */
  template: `
  <p>
    <b>Sample Works!</b>
  </p>
  `,
  styles: []
})
export class SampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
