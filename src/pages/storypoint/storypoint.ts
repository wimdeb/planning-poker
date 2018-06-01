import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

/*
  Generated class for the Storypoint page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-storypoint',
  templateUrl: 'storypoint.html'
})
export class StoryPoint {
  storyPoint: string;

  constructor(private navParams: NavParams) {}

  ionViewDidLoad() {
    this.storyPoint = this.navParams.get('storyPoint');
  }

}
