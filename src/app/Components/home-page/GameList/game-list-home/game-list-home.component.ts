import {Component, Input} from '@angular/core';
import {GameListLayoutComponent} from "../game-list-layout/game-list-layout.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-game-list-home',
  standalone: true,
  imports: [GameListLayoutComponent, CommonModule],
  templateUrl: './game-list-home.component.html',
  styleUrl: './game-list-home.component.css'
})
export class GameListHomeComponent {
  @Input() gameList : any[] = [];
  gameItem = 0;


}
