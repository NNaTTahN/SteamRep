import { Component } from '@angular/core';
import { CommonModule} from "@angular/common";
<<<<<<< HEAD
import { GameListLayoutComponent} from "./game-list-layout/game-list-layout.component";
import { SlideItemComponent} from "./Slide Item/slideItem.component";
import {HomeSliderComponent} from "./home-slider/home-slider.component";
=======
>>>>>>> a8eced8 (Home page game list WIP)

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  activeButton: string | null = 'newAndTrending';

  buttonClicked(button: string) {
    this.activeButton = button;
  }
}
