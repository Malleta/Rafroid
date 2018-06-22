import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ServerServices} from '../server.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private server: ServerServices, private router: Router) {
  }

  ngOnInit() {
  }

  Login(f) {
    this.server.Login(f)
      .subscribe(result => {
        if (result === false) {
          console.warn('Niste aktivirali nalog');
        } else {
          localStorage.setItem('currentUser', result.toString());
          // todo modal uspesno registrovanje, redirect 5 sec i takodje disable cim pritisne dugme
          this.router.navigate(['']);
        }

      }, error => console.log(error));
  }
}
