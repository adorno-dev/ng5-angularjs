import { Component, OnInit } from '@angular/core';
import { GameService } from './../game.service';

@Component({
  selector: 'app-game-list',
  template: `
  <h3>Game List</h3>
  <span class="error">{{errorMessage}}</span>
  <ul *ngFor="let game of gameList">
    <li>{{game.title}}</li>
  </ul>
  `,
  styles: []
})
export class GameListComponent implements OnInit {

  public errorMessage: string;

  public gameList = [];

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.getGameList()
                    .subscribe(
                      data => this.gameList = data,
                      error => this.errorMessage = error);
  }

}
