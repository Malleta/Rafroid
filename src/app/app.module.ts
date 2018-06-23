import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {AdminComponent} from './main-page/admin/admin.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {routing} from './app.routing';
import {MainPageComponent} from './main-page/main-page.component';
import {VoteComponent} from './main-page/vote/vote.component';
import {HowToVoteComponent} from './main-page/how-to-vote/how-to-vote.component';
import {AppListComponent} from './main-page/app-list/app-list.component';
import {AppDetailsComponent} from './main-page/app-details/app-details.component';
import {AppCommentsComponent} from './main-page/app-details/app-comments/app-comments.component';

import {ServerServices} from './server.services';

import {AuthGuard} from './guards/auth.guard';
import {NeAuthGuard} from './guards/neAuth.guard';

import {ModalModule} from 'ngx-bootstrap';

import {InfoModalComponent} from './shared/modals/infoModal.component';
import {ANIMATION_TYPES, LoadingModule} from 'ngx-loading';
import {NgxGalleryModule} from 'ngx-gallery';
import {NgxChartsModule} from '@swimlane/ngx-charts';

import {AppsearchPipe} from './shared/appsearch.pipe';


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
    InfoModalComponent,
    AppCommentsComponent,
    AppsearchPipe
  ],
  imports: [
    BrowserModule,
    routing,
    NgxGalleryModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    ModalModule.forRoot(),
    LoadingModule.forRoot({
      animationType: ANIMATION_TYPES.rotatingPlane,
      backdropBackgroundColour: 'rgba(255,255,255,0.7)',
      backdropBorderRadius: '4px',
      primaryColour: '#000',
      secondaryColour: '#000',
      tertiaryColour: '#000'
    })
  ],
  providers: [ServerServices, AuthGuard, NeAuthGuard],
  bootstrap: [AppComponent],
  exports: [],
  entryComponents: [InfoModalComponent]
})
export class AppModule {
}
