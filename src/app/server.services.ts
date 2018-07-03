import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

import {IApp} from './shared/models/app.interface';
import {IComment} from './shared/models/comment.interface';


@Injectable()
export class ServerServices {
  constructor(private http: HttpClient) {
  }

  AddUser(f) {
    const body = new HttpParams()
      .set('email', f.value.email)
      .set('password', f.value.password);

    return this.http.post('/petrichor/api/register.php', body.toString(), {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }

  Login(f) {
    const body = new HttpParams()
      .set('email', f.value.email)
      .set('password', f.value.password);

    return this.http.post('/petrichor/api/login.php', body.toString(), {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }

  GetAllApps() {
    return this.http.get<IApp[]>('/petrichor/api/allapps.php');
  }

  GetAppDetails(appName: string) {
    return this.http.get<IApp>('/petrichor/api/getAppByName.php', {params: {name: appName}});
  }

  GetAppComments(appId) {
    return this.http.get<IComment[]>('/petrichor/api/getcomments.php', {params: {appid: appId}});
  }

  AddComment(userId, comment, appId) {
    const body = new HttpParams()
      .set('userId', userId)
      .set('comment', comment)
      .set('appId', appId);

    return this.http.post('/petrichor/api/addingcomment.php', body, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }

  NewVote(appId, userId) {
    const body = new HttpParams()
      .set('korisnik', userId)
      .set('appID', appId);

    return this.http.post('/petrichor/api/vote.php', body, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }

  GetVotes() {
    return this.http.get('/petrichor/api/pozicija.php');
  }

  GetUsers() {
    return this.http.get('/petrichor/api/admin.php');
  }

  GetUserComments(userId) {
    return this.http.get<IComment[]>('/petrichor/api/getUserComments.php', {params: {userId: userId}});
  }

  CheckIfUserVoted(userId) {
    return this.http.get('/petrichor/api/checkIfUserVoted.php', {params: {userId: userId}});
  }

  AppsNumberOfVotes(appId) {
    return this.http.get('/petrichor/api/appNumberOfVotes.php', {params: {appId: appId}});
  }

  UserVoted(userId) {
    return this.http.get('/petrichor/api/userVotedFor.php', {params: {userId: userId}});
  }
}
