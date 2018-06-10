import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { routing } from './app.routing';
import { MainPageComponent } from './main-page/main-page.component';
import { VoteComponent } from './main-page/vote/vote.component';
import { HowToVoteComponent } from './main-page/how-to-vote/how-to-vote.component';
import { AppListComponent } from './main-page/app-list/app-list.component';
import { AppDetailsComponent } from './main-page/app-details/app-details.component';

import {StarRatingComponent, StarRatingModule} from 'levon-angular-star-rating/dist';
import {NgxGalleryModule} from 'ngx-gallery';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MainPageComponent,
    VoteComponent,
    HowToVoteComponent,
    AppListComponent,
    AppDetailsComponent
  ],
  imports: [
    BrowserModule,
    routing,
    StarRatingModule,
    NgxGalleryModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [StarRatingComponent]
})
export class AppModule { }
