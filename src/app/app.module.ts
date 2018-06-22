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

import {NgxGalleryModule} from 'ngx-gallery';
import {NgxChartsModule} from '@swimlane/ngx-charts';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {ServerServices} from './server.services';
import {AuthGuard} from './guards/auth.guard';
import {HttpModule} from '@angular/http';
import { AdminComponent } from './main-page/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MainPageComponent,
    VoteComponent,
    HowToVoteComponent,
    AppListComponent,
    AppDetailsComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    NgxGalleryModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [ServerServices, AuthGuard],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
