import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { StoryPoint } from '../storypoint/storypoint';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  storyPointList = [ '0', '1/2', '1', '2', '3', '5', '8', '13', '21', '34', '55', '89' ];

  constructor(public navCtrl: NavController) {

  }

  showStoryPoint(storyPoint: number) {
    this.navCtrl.push(StoryPoint, {
      storyPoint: storyPoint
    });
  }

}
