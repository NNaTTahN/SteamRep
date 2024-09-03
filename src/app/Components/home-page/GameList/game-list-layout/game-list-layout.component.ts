import { Component, Input } from '@angular/core';
import {JsonPipe} from "@angular/common";
import {CommonModule} from "@angular/common";
import {GameListSidePanelComponent} from "../game-list-side-panel/game-list-side-panel.component";
@Component({
  selector: 'app-game-list-layout',
  standalone: true,
  imports: [
    JsonPipe,
    CommonModule,
    GameListSidePanelComponent,
  ],
  templateUrl: './game-list-layout.component.html',
  styleUrl: './game-list-layout.component.css'
})
export class GameListLayoutComponent {
  @Input() gameImg: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDPl0nGKfSFOjRbR5N3pPFm0H40lROX_dNyQ&s";
  @Input() gameTitle: string = "Game Title";
  @Input() gameTags: string[] = ["Game Tags"];
  @Input() gamePlatform: string = "window-icon.png";
  @Input() gamePrice: string = "0,00₫";
  @Input() gameDate: string = "DD/MM/YYYY";

  @Input() sideImg : string [] = ["Game Images"];
  @Input() sideReview : string = "Game Title";
  @Input() isActive: boolean = false;

}
