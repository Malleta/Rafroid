import {Component, OnInit} from '@angular/core';
import {NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';
import {ServerServices} from '../../server.services';
import {ActivatedRoute} from '@angular/router';

import * as jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-app-details',
  templateUrl: './app-details.component.html',
  styleUrls: ['./app-details.component.css']
})
export class AppDetailsComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  public app: any;
  public comments: any;
  public comment: string;
  public ifVoted = false;
  public voteBtnText: string;

  constructor(private server: ServerServices, private route: ActivatedRoute) {
    this.server.GetAppDetails(this.route.snapshot.params.id).subscribe(result => {
      this.app = result[0];
      this.server.GetAppComments(this.app.id).subscribe(result1 => {
        this.comments = result1;
      });
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

  AddComment() {
    const userId = jwt_decode(localStorage.getItem('currentUser')).id;
    this.server.AddComment(userId, this.comment, this.app.id)
      .subscribe(result => {
        console.log(result);
      });
  }

  NewVote() {
    const userId = jwt_decode(localStorage.getItem('currentUser')).id;

    this.server.NewVote(this.app.id, userId).subscribe(result => {
    });
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

    this.galleryImages = [
      {
        small: 'https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        medium: 'https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        big: 'https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
      },
      {
        small: 'https://images.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        medium: 'https://images.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        big: 'https://images.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
      },
      {
        small: 'https://images.pexels.com/photos/696680/pexels-photo-696680.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        medium: 'https://images.pexels.com/photos/696680/pexels-photo-696680.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        big: 'https://images.pexels.com/photos/696680/pexels-photo-696680.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
      }
    ];

  }

}
