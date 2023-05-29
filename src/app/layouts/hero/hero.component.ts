import { Component } from '@angular/core';

import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  lottieOptions: AnimationOptions = {
    path: '/assets/animation/blog.json',
  };
  
  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

}
