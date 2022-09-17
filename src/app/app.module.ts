import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './general-comps/header/header.component';
import { MainContentComponent } from './general-comps/main-content/main-content.component';
import { FooterComponent } from './general-comps/footer/footer.component';
// main content
import { HomePageComponent } from './general-comps/main-content/main-pages/home-page/home-page.component';
import { VisionComponent } from './general-comps/main-content/main-pages/vision/vision.component';
import { LearningComponent } from './general-comps/main-content/main-pages/learning/learning.component';
import { ParticipatingComponent } from './general-comps/main-content/main-pages/participating/participating.component';
// user controls
import { InfoCardComponent } from './general-comps/user-controls/info-card/info-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainContentComponent,
    FooterComponent,
    // main content
    HomePageComponent,
    VisionComponent,
    LearningComponent,
    ParticipatingComponent,
    // user controls
    InfoCardComponent,
  ],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
