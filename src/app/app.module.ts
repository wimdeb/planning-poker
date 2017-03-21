import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StoryPoint } from '../pages/storypoint/storypoint';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    StoryPoint
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    StoryPoint
  ],
  providers: []
})
export class AppModule {}
