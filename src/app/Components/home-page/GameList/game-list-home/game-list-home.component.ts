import {Component, Input,} from '@angular/core';
import {GameListLayoutComponent} from "../game-list-layout/game-list-layout.component";
import {CommonModule, NgClass, NgFor} from "@angular/common";
import {GameListSidePanelComponent} from "../game-list-side-panel/game-list-side-panel.component";
interface Game {
  gameImg: string;
  gameTitle: string;
  gameTags: string[];
  gamePlatform: string;
  gamePrice: string;
  gameDate: string;
  sideImg : string[];
  sideReview : string;
}
@Component({
  selector: 'app-game-list-home',
  standalone: true,
  imports: [GameListLayoutComponent, CommonModule, GameListSidePanelComponent, NgClass, NgFor],
  templateUrl: './game-list-home.component.html',
  styleUrl: './game-list-home.component.css'
})
export class GameListHomeComponent {
  gameList =[
    {
      gameImg: 'swagger.png',
      gameTitle: "Thugger",
      gameTags: ['Action', 'Swagger', 'Penis', 'THE THUG SHAKER DO THE SHAKER SHAKE IT'],
      gamePlatform: 'window-icon.png',
      gamePrice: '123,123₫',
      gameDate: '20/8/2023',
      sideReview: 'Very Positive',
      sideImg: ['christmas-god.png', 'Tet-god.png', 'demi-god.png','god.png']
    },
    {
      gameImg: 'speed.PNG',
      gameTitle: "DreamyBullxxx",
      gameTags: ['Action', 'Swagger', 'Penis', 'Adventure'],
      gamePlatform: 'window-icon.png',
      gamePrice: '123,123₫',
      gameDate: '14/12/2020',
      sideReview: 'Mixed',
      sideImg: ['goku.jpg', 'pedogoku.png', 'dripgoku.png','moggoku.png']
    },
    {
      gameImg: 'baguette.PNG',
      gameTitle: "Amazing Cultivator Simulator",
      gameTags: ['Action', 'Swagger', 'LGBTQ+', 'Mega Faggot'],
      gamePlatform: 'window-icon.png',
      gamePrice: '100,223₫',
      gameDate: '10/5/2024',
      sideReview: 'Overwhelmingly Positive',
      sideImg: ['christmas-god.png', 'Tet-god.png', 'demi-god.png','god.png']
    }
  ]

  hoveredGame: Game = this.gameList[0];
  activeIndex = 0;
  activeSideIndex = 0;
  isFading: boolean = false;

  onHoverGame(game: Game, index: number) {
    this.hoveredGame = game;
    this.activeIndex = index;
    console.log(this.activeIndex)

    this.isFading = true;
    setTimeout(() => {this.isFading = false;}, 200);
  }
}
