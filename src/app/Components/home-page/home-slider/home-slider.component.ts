import { Component, Input, OnInit, OnDestroy,  } from '@angular/core';
import { SlideItemComponent} from "../Slide Item/slideItem.component";
import {CommonModule, NgClass, NgFor} from "@angular/common";

@Component({
  selector: 'app-home-slider',
  standalone: true,
  imports: [SlideItemComponent, NgClass, NgFor],
  templateUrl: './home-slider.component.html',
  styleUrl: './home-slider.component.css'
})
export class HomeSliderComponent implements OnInit, OnDestroy {
  @Input() games: any[] = [];
  @Input() slideInterval: number = 5000;

  currentIndex = 0;
  autoSlideInterval: any;
  get currentGame() {
    return this.games[this.currentIndex];
  }

  nextSlide(){
    if(this.currentIndex < this.games.length - 1){
      this.currentIndex++;
    }
    else {
      this.currentIndex = 0;
    }
    this.resetSlideTime()
  }

  prevSlide(){
    if(this.currentIndex > 0){
      this.currentIndex--;
    }
    else {
      this.currentIndex = this.games.length - 1;
    }
    this.resetSlideTime()
  }
  ngOnInit() {
    this.slideTimer();
  }
  ngOnDestroy() {
    this.clearTimer();
  }

  slideTimer(){
    this.autoSlideInterval = setInterval(()=>{this.nextSlide();},this.slideInterval)
  }

  resetSlideTime(){
    setTimeout(() => {
      this.clearTimer();
      this.slideTimer();
    },5000)
  }
  private clearTimer() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval)
    }
  }
}
