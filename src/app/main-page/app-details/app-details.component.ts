import {Component, OnInit, ViewChild} from '@angular/core';
import {NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';
import {ServerServices} from '../../server.services';
import {ActivatedRoute} from '@angular/router';

import * as jwt_decode from 'jwt-decode';
import {IApp} from '../../shared/models/app.interface';
import {AppCommentsComponent} from './app-comments/app-comments.component';


@Component({
  selector: 'app-app-details',
  templateUrl: './app-details.component.html',
  styleUrls: ['./app-details.component.css']
})
export class AppDetailsComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  public app: IApp;
  public numberOfVotes: number;

  public comment: string;

  public ifVoted = false;
  public voteBtnText: string;

  @ViewChild(AppCommentsComponent)
  private commentsComp: AppCommentsComponent;

  constructor(private server: ServerServices, private route: ActivatedRoute) {
    this.server.GetAppDetails(this.route.snapshot.params.id)
      .subscribe(result => {
        this.app = result[0];
        this.galleryImages = [
          {
            small: `../../../assets/apps/${this.app.name}/carousel/1.jpeg`,
            medium: `../../../assets/apps/${this.app.name}/carousel/1.jpeg`,
            big: `../../../assets/apps/${this.app.name}/carousel/1.jpeg`
          },
          {
            small: `../../../assets/apps/${this.app.name}/carousel/2.jpeg`,
            medium: `../../../assets/apps/${this.app.name}/carousel/2.jpeg`,
            big: `../../../assets/apps/${this.app.name}/carousel/2.jpeg`
          },
          {
            small: `../../../assets/apps/${this.app.name}/carousel/3.jpeg`,
            medium: `../../../assets/apps/${this.app.name}/carousel/3.jpeg`,
            big: `../../../assets/apps/${this.app.name}/carousel/3.jpeg`
          }
        ];
        this.commentsComp.getComments(this.app.id);
        this.server.AppsNumberOfVotes(this.app.id)
          .subscribe(result3 => {
            this.numberOfVotes = result3[0].value;
          }, error1 => console.log(error1));
      });

    this.server.CheckIfUserVoted(jwt_decode(localStorage.getItem('currentUser')).id)
      .subscribe(result => {
        if (result === true) {
          this.ifVoted = true;
          this.voteBtnText = 'Glasano';
        } else {
          this.voteBtnText = 'Glasaj';
        }
      });
  }

  AddComment(): void {
    const userId = jwt_decode(localStorage.getItem('currentUser')).id;
    this.server.AddComment(userId, this.comment, this.app.id)
      .subscribe(result => {
        this.commentsComp.getComments(this.app.id);
      }, error1 => console.log(error1));
  }

  NewVote(): void {
    const userId = jwt_decode(localStorage.getItem('currentUser')).id;
    this.server.NewVote(this.app.id, userId)
      .subscribe(result => {
        this.ifVoted = true;
        this.voteBtnText = 'Glasano';
      }, error1 => console.log(error1));
  }


  DownloadApp(): void {
    window.open(`/assets/apps/${this.app.name}/${this.app.name}.apk`);
  }

  ngOnInit(): void {
    this.galleryOptions = [
      {
        width: '100%',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        imageAutoPlay: true,
        imageAutoPlayPauseOnHover: true,
        previewCloseOnClick: true,
        previewCloseOnEsc: true,
        previewKeyboardNavigation: true
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];
  }
}
