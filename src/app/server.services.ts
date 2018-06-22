import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
export class ServerServices {
  constructor(private http: HttpClient, private router: Router) {
  }

  AddUser(f) {
    const body = new HttpParams()
      .set('email', f.value.email)
      .set('password', f.value.password);

    return this.http.post('/api/register.php', body.toString(), {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }

  Login(f) {
    const body = new HttpParams()
      .set('email', f.value.email)
      .set('password', f.value.password);

    return this.http.post('/api/login.php', body.toString(), {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }

  GetAllApps() {
    return this.http.get('/api/allapps.php');
  }

  GetAppDetails(appName: string) {
    return this.http.get('/api/getAppByName.php', {params: {name: appName}});
  }

  GetAppComments(appId) {
    return this.http.get('/api/getcomments.php', {params: {appid: appId}});
  }

  AddComment(userId, comment, appId) {
    const body = new HttpParams()
      .set('userId', userId)
      .set('comment', comment)
      .set('appId', appId);

    return this.http.post('/api/addingcomment.php', body, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }

  NewVote(appId, userId) {
    const body = new HttpParams()
      .set('korisnik', userId)
      .set('appID', appId);

    return this.http.post('/api/vote.php', body, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }

  GetVotes() {
    return this.http.get('/api/pozicija.php');
  }

  GetUsers() {
    return this.http.get('/api/admin.php');
  }

  GetUserComments(userId) {
    return this.http.get('/api/getUserComments.php', {params: {userId: userId}});
  }

  CheckIfUserVoted(userId) {
    return this.http.get('/api/checkIfUserVoted.php', {params: {userId: userId}});

  }
}
