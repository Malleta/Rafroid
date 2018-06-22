import {Component, OnInit} from '@angular/core';
import {ServerServices} from '../../server.services';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public users: any;
  public comments: any;

  constructor(private server: ServerServices) {
  }

  ngOnInit() {
    this.server.GetUsers().subscribe(result => {
      this.users = result;
    });
  }

  GetUserComments(userId) {
    this.server.GetUserComments(userId).subscribe(result => {
      this.comments = result;
    });
  }

}
