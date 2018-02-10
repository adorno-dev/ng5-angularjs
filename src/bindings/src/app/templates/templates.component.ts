import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templates',
  template: `
  <hr />
  <h3>Template Variables (References)</h3>
  <input #titleInput type="text" />
  <button (click)="showMessage(titleInput.value)">Log</button>
  <br />
  <br />
  `,
  styles: []
})
export class TemplatesComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  showMessage(value) {
    console.log(value);
  }

}
