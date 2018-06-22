import {Component, OnInit} from '@angular/core';
import {ServerServices} from '../server.services';
import {Router} from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private server: ServerServices, private router: Router) {
  }

  ngOnInit() {
  }

  AddUser(f) {
    if (f.value.password === f.value.rePassword) {
      this.server.AddUser(f)
        .subscribe(result => {
          // todo modal uspesno registrovanje, redirect 5 sec i takodje disable cim pritisne dugme
          // todo validacija
          this.router.navigate(['/login']);
        }, error => console.log(error));
    } else {
      console.log('Wrong password');
    }
  }


}
