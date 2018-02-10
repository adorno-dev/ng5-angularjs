import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-list',
  template: `
  <div class="container">
    <h2>Game List Page</h2>
    <ul>
      <li *ngFor="let game of games"><a [routerLink]="['detail', game.id]">{{game.title}}</a></li>
    </ul>
    <router-outlet></router-outlet>
  </div>
  `,
  styles: []
})
export class GameListComponent implements OnInit {

  games = [
    {id:1,title:'Game #1'},
    {id:2,title:'Game #2'},
    {id:3,title:'Game #3'},
    {id:4,title:'Game #4'},
    {id:5,title:'Game #5'}
  ]

  constructor() { }

  ngOnInit() { }

}
