import {ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'slideItem',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slideItem.component.html',
  styleUrl: './slideItem.component.css'
})
export class SlideItemComponent {
  @Input() Title: string = "Game Title";
  @Input() Thumbnail: string = "lightskinned.png";
  @Input() Images: string[] = ["Game Images"];
  @Input() Tags: string[] = ["Game Tags"];
  @Input() Price: string = "0,00₫";
  @Input() Platform: string = "window-icon.png";

  activeImage: string = this.Thumbnail;


  imageChanging: boolean = false;
  changeImage(url: string) {

    this.activeImage = url;
    this.imageChanging = true;
  }
  resetImage(){
    setTimeout(() => {this.imageChanging = false;},300)
  }
}
