import {Component, OnInit, ViewChild} from '@angular/core';
import {ServerServices} from '../server.services';
import {Router} from '@angular/router';

import {InfoModalComponent} from '../shared/modals/infoModal.component';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  bsModalRef: BsModalRef;
  inputErrorEmail = '';
  inputErrorPass = '';

  constructor(private server: ServerServices, private router: Router, private modalService: BsModalService) {
  }

  ngOnInit() {
  }

  AddUser(f) {
    this.inputErrorEmail = '';
    this.inputErrorPass = '';
    const emailDomen = f.value.email.split('@');

    if (emailDomen[1] === 'raf.rs') {
      if (f.value.password === f.value.rePassword) {
        this.server.AddUser(f)
          .subscribe((result: number) => {
            if (result === 200) {
              const initialState = {
                title: 'Uspešna registracija',
                description: `Aktivirajte nalog pomoću linka koji vam je poslat na email adresu.`
              };
              this.modalService.show(InfoModalComponent, {initialState});
              setTimeout(() => {
                this.router.navigate(['/login']);
              }, 3000);
            } else {
              const initialState = {
                title: 'Neuspešna registracija',
                description: `Došlo je do greške prilikom registacije.`
              };
              this.modalService.show(InfoModalComponent, {initialState});
            }
          }, error => console.log(error));
      } else {
        this.inputErrorPass = 'Lozinke nisu iste';
      }
    } else {
      this.inputErrorEmail = 'Koristite samo email sa @raf.rs domenom.';
    }

  }


}
