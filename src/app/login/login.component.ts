import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {ServerServices} from '../server.services';
import {BsModalService} from 'ngx-bootstrap';
import {InfoModalComponent} from '../shared/modals/infoModal.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private server: ServerServices, private router: Router, private modalService: BsModalService) {
  }

  Login(f) {
    this.server.Login(f)
      .subscribe(result => {
        localStorage.setItem('currentUser', result.toString());
        this.router.navigate(['']);
      }, error => {
        const initialState = {
          title: 'Neuspešno prijavljivanje',
          description: `Nalog nije aktiviran.`
        };
        this.modalService.show(InfoModalComponent, {initialState});
      });
  }
}
