import { Component } from '@angular/core';
import { CommonModule} from "@angular/common";
import { SlideItemComponent} from "./Slide Item/slideItem.component";
import { HomeSliderComponent} from "./home-slider/home-slider.component";

import {GameListSidePanelComponent} from "./game-list-side-panel/game-list-side-panel.component";
import {GameListLayoutComponent} from "./GameList/game-list-layout/game-list-layout.component";
import {GameListHomeComponent} from "./GameList/game-list-home/game-list-home.component";


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, GameListLayoutComponent, GameListHomeComponent, GameListSidePanelComponent,SlideItemComponent, HomeSliderComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  activeButton: string | null = 'newAndTrending';

  buttonClicked(button: string) {
    this.activeButton = button;
  }
  games = [
    {
      title: "Game Title 1",
      thumbnail: "lightskinned.png",
      images: ["lightskinned.png", "moggoku.png", "Leorio.jpg", "Lowtierman.jpg"],
      tags: ["Action", "Adventure", 'Thugs', 'Oiled up', 'Hentai'],
      price: "1000,00₫",
      platform: "window-icon.png"
    },
    {
      title: "Game Title 2",
      thumbnail: "diddy.png",
      images: ["seth.png", "xichad.jpg", "warlord.png", "yo.png"],
      tags: ["Action", "Adventure", 'Thugs', 'Oiled up', 'Hentai'],
      price: "200,00₫",
      platform: "window-icon.png"
    },
    {
      title: "Game Title 3",
      thumbnail: "swagger.png",
      images: ["lightskinned.png", "moggoku.png", "Leorio.jpg", "Lowtierman.jpg"],
      tags: ["Action", "Adventure", 'Thugs', 'Oiled up', 'Hentai'],
      price: "3000,00₫",
      platform: "window-icon.png"
    }]

}
