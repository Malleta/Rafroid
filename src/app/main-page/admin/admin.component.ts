import {Component, OnInit} from '@angular/core';
import {ServerServices} from '../../server.services';
import {IComment} from '../../shared/models/comment.interface';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public users: any;
  public comments: IComment[];
  public loader = false;
  public userVote = '';

  constructor(private server: ServerServices) {
    this.server.GetUsers().subscribe(result => {
      this.users = result;
    });
  }

  ngOnInit() {
  }

  GetUserComments(userId) {
    this.loader = true;
    this.server.GetUserComments(userId).subscribe(result => {
      this.comments = result;
      this.loader = false;
    });
    this.server.UserVoted(userId)
      .subscribe(result => {
        this.userVote = result[0].name;
      });
  }

}
