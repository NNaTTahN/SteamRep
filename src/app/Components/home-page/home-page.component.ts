import { Component } from '@angular/core';
import { CommonModule} from "@angular/common";
import { GameListLayoutComponent} from "./game-list-layout/game-list-layout.component";
import { SlideItemComponent} from "./Slide Item/slideItem.component";
import {HomeSliderComponent} from "./home-slider/home-slider.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  buttonClicked(button: string) {
    this.activeButton = button;
  }
}
