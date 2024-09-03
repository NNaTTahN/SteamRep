import { Component } from '@angular/core';
import { CommonModule} from "@angular/common";
<<<<<<< HEAD
import { GameListLayoutComponent} from "./game-list-layout/game-list-layout.component";
import { SlideItemComponent} from "./Slide Item/slideItem.component";
<<<<<<< HEAD
import {HomeSliderComponent} from "./home-slider/home-slider.component";
=======
>>>>>>> a8eced8 (Home page game list WIP)
=======
import { HomeSliderComponent} from "./home-slider/home-slider.component";
import { GameListHomeComponent} from "./game-list-home/game-list-home.component";
import {GameListSidePanelComponent} from "./game-list-side-panel/game-list-side-panel.component";
>>>>>>> 4b07e5d (Game list side panel wip)

@Component({
  selector: 'app-home-page',
  standalone: true,
<<<<<<< HEAD
  imports: [CommonModule],
=======
  imports: [CommonModule, GameListLayoutComponent, GameListHomeComponent, GameListSidePanelComponent,SlideItemComponent, HomeSliderComponent],
>>>>>>> 4b07e5d (Game list side panel wip)
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  activeButton: string | null = 'newAndTrending';

  buttonClicked(button: string) {
    this.activeButton = button;
  }
<<<<<<< HEAD
=======
  gameList =[
    {
      gameImg: 'swagger.png',
      gameTitle: "Thugger",
      gameTags: ['Action', 'Swagger', 'Penis', 'THE THUG SHAKER DO THE SHAKER SHAKE IT'],
      gamePlatform: 'window-icon.png',
      gamePrice: '123,123₫',
      gameDate: '20/8/2023',
    },
    {
      gameImg: 'speed.PNG',
      gameTitle: "DreamyBullxxx",
      gameTags: ['Action', 'Swagger', 'Penis', 'Adventure'],
      gamePlatform: 'window-icon.png',
      gamePrice: '123,123₫',
      gameDate: '14/12/2020',
    },
    {
      gameImg: 'baguette.PNG',
      gameTitle: "Amazing Cultivator Simulator",
      gameTags: ['Action', 'Swagger', 'LGBTQ+', 'Mega Faggot'],
      gamePlatform: 'window-icon.png',
      gamePrice: '100,223₫',
      gameDate: '10/5/2024',
    }
  ]

  games = [
    {
      title: "Game Title 1",
      thumbnail: "lightskinned.png",
      images: ["i agree.PNG", "speed.PNG", "cock.PNG", "baguette.PNG"],
      tags: ["Action", "Adventure", 'Thugs', 'Oiled up', 'Hentai'],
      price: "1000,00₫",
      platform: "window-icon.png"
    },
    {
      title: "Game Title 2",
      thumbnail: "angy.jpg",
      images: ["i agree.PNG", "speed.PNG", "cock.PNG", "baguette.PNG"],
      tags: ["Action", "Adventure", 'Thugs', 'Oiled up', 'Hentai'],
      price: "200,00₫",
      platform: "window-icon.png"
    },
    {
      title: "Game Title 3",
      thumbnail: "swagger.png",
      images: ["i agree.PNG", "speed.PNG", "cock.PNG", "baguette.PNG"],
      tags: ["Action", "Adventure", 'Thugs', 'Oiled up', 'Hentai'],
      price: "3000,00₫",
      platform: "window-icon.png"
    }]
>>>>>>> 4b07e5d (Game list side panel wip)
}
