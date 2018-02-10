import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Game } from '../game'

@Component({
  selector: 'app-game-detail',
  template: `
  <div class="container">
    <h2>Game Page</h2>
    <h4>Key: {{game.id}}</h4>
    <h4>Key: {{game.title}}</h4>
  </div>
  `,
  styles: []
})
export class GameDetailComponent implements OnInit {

  private subscription: any;

  public game: Game;

  games = [
    {id:1,title:'Game #1'},
    {id:2,title:'Game #2'},
    {id:3,title:'Game #3'},
    {id:4,title:'Game #4'},
    {id:5,title:'Game #5'}
  ]

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.game = this.games.find(w => w.id == params["id"]);
    })
  }

}
