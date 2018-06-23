import {Component, OnInit} from '@angular/core';
import {ServerServices} from '../../server.services';
import {IApp} from '../../shared/models/app.interface';

@Component({
  selector: 'app-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.css']
})
export class AppListComponent implements OnInit {

  public apps: IApp[] = [];

  constructor(private server: ServerServices) {
    this.server.GetAllApps().subscribe(result => {
      this.apps = result;
    }, error1 => console.log(error1));
  }

  ngOnInit() {
  }
}
