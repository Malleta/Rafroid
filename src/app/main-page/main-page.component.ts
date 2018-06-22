import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import * as jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  public isAdmin = false;

  constructor(private router: Router) {
    if (jwt_decode(localStorage.getItem('currentUser')).admin === '1') {
      this.isAdmin = true;
    }
  }

  ngOnInit() {
  }

  LogOut() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['login']);
  }
}
