import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  template: `
  <hr />
  <h3>Class Databinding</h3>
  <ul>
    <li class="success">Success</li>
    <li [class]="success_class">Success [class]</li>
    <li class="info" [class]="success_class">Success [class] overrides class</li>
    <li [class.info]="is_information" class="info">Error message</li>
    <li [ngClass]="messages">Messages</li>
  </ul>
  `,
  styles: []
})
export class ClassesComponent implements OnInit {

  public success_class: string = "success";
  public has_error: boolean = true;
  public is_information: boolean = true;
  public messages: object = {
    "success": !this.has_error,
    "error": this.has_error,
    "info": this.is_information
  }

  constructor() { }

  ngOnInit() { }

}
