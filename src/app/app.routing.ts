import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {MainPageComponent} from './main-page/main-page.component';
import {VoteComponent} from './main-page/vote/vote.component';
import {HowToVoteComponent} from './main-page/how-to-vote/how-to-vote.component';
import {AppListComponent} from './main-page/app-list/app-list.component';
import {AppDetailsComponent} from './main-page/app-details/app-details.component';

import {AuthGuard} from './guards/auth.guard';
import {AdminComponent} from './main-page/admin/admin.component';
import {NeAuthGuard} from './guards/neAuth.guard';

const appRouting: Routes = [
  {
    path: '', component: MainPageComponent, canActivate: [AuthGuard], children: [
      {path: '', component: AppListComponent},
      {path: 'application-details/:id', component: AppDetailsComponent},
      {path: 'vote', component: VoteComponent},
      {path: 'how-to-vote', component: HowToVoteComponent},
      {path: 'admin', component: AdminComponent}
    ]
  },
  {path: 'login', component: LoginComponent, canActivate: [NeAuthGuard]},
  {path: 'register', component: RegisterComponent, canActivate: [NeAuthGuard]}
];

export const routing = RouterModule.forRoot(appRouting);
