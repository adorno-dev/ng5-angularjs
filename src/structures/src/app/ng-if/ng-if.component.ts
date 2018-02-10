import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  template: `
  <hr />
  <h3>*ngIf Statement</h3>

  <!-- Templates -->

  <ng-template #thenBlock>
    <h4>[Display Block]</h4>
  </ng-template>

  <ng-template #elseBlock>
    <h4>[Hidden Block]</h4>
  </ng-template>

  <!-- Sample #1 -->

  <h4 *ngIf="displayName; else elseBlock">[Display Block]</h4>

  <!-- Sample #2 -->

  <div *ngIf="displayName; then thenBlock; else elseBlock"></div>

  `,
  styles: []
})
export class NgIfComponent implements OnInit {

  public displayName: boolean = true;

  constructor() { }

  ngOnInit() { }

}
