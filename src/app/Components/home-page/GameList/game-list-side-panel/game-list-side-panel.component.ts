import {Component, Input} from '@angular/core';
import {CommonModule, NgFor} from "@angular/common";

@Component({
  selector: 'app-game-list-side-panel',
  standalone: true,
  imports: [CommonModule, NgFor, ],
  templateUrl: './game-list-side-panel.component.html',
  styleUrl: './game-list-side-panel.component.css'
})
export class GameListSidePanelComponent {
  @Input() Review: string = "Positive";
  @Input()Tag: string [] = ["Game tags 1", "Game tags 2", "Game tags 3"];
  @Input()SideImg: string[] =['angy.jpg', 'lightskinned.png', 'swagger.png', 'cock.PNG'];
  @Input()Title: string = "Game title 1";
  @Input()isActive : boolean = false;
}
