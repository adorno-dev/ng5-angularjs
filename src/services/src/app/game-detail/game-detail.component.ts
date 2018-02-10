import { Component, OnInit } from '@angular/core';
import { GameService } from './../game.service';

@Component({
  selector: 'app-game-detail',
  template: `
  <h3>Game Detail</h3>
  <span class="error">{{errorMessage}}</span>
  <ul *ngFor="let game of gameList">
    <li>{{game.id}}. {{game.title}} <b>[{{game.rating}}]</b></li>
  </ul>
  `,
  styles: []
})
export class GameDetailComponent implements OnInit {

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
