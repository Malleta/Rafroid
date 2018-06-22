import {Component, OnInit} from '@angular/core';
import {ServerServices} from '../../server.services';

@Component({
  selector: 'app-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.css']
})
export class AppListComponent implements OnInit {

  public apps: any;

  constructor(private server: ServerServices) {
    this.server.GetAllApps().subscribe(result => {
        this.apps = result;
    }, error1 => console.log(error1));
  }

  ngOnInit() {
  }
}
