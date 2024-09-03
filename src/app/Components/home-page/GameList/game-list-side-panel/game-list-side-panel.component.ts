import { Component } from '@angular/core';
import {CommonModule, NgFor} from "@angular/common";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-game-list-side-panel',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './game-list-side-panel.component.html',
  styleUrl: './game-list-side-panel.component.css'
})
export class GameListSidePanelComponent {
  Review: string = "Positive";
  Tag: string [] = ["Game tags 1", "Game tags 2", "Game tags 3"];
  SideImg: string[] =['angy.jpg', 'lightskinned.png', 'swagger.png', 'cock.PNG'];
  Title: string = "Game title 1";
}
