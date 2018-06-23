import {Component} from '@angular/core';
import {ServerServices} from '../../../server.services';
import {IComment} from '../../../shared/models/comment.interface';

@Component({
  selector: 'app-comments',
  templateUrl: './app-comments.component.html',
  styleUrls: ['./app-comments.component.css']
})
export class AppCommentsComponent {

  public comments: IComment[];
  public loader = true;

  constructor(private server: ServerServices) {
  }

  getComments(appId: number) {
    this.loader = true;
    this.server.GetAppComments(appId).subscribe(
      result => {
        this.comments = result;
        this.loader = false;
      });
  }

}
