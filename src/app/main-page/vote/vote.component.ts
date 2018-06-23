import {Component, OnInit} from '@angular/core';
import {ServerServices} from '../../server.services';
import {Router} from '@angular/router';
import {IApp} from '../../shared/models/app.interface';


@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  public apps: IApp[];
  public data: any;

  search: string;

  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Naziv aplikacije';
  showYAxisLabel = true;
  yAxisLabel = 'Broj glasova';

  colorScheme = {
    domain: ['#a8385d', '#7aa3e5', '#a27ea8', '#aae3f5', '#adcded', '#a95963', '#8796c0', '#7ed3ed', '#50abcc', '#ad6886']
  };

  constructor(private server: ServerServices, private router: Router) {
    if (window.innerWidth < 500) {
      this.showLegend = false;
    }
    this.server.GetAllApps()
      .subscribe(result => {
        this.apps = result;
      });
    this.server.GetVotes()
      .subscribe(result => {
        this.data = result;
      });
  }

  ngOnInit() {
    setInterval(() => {
      this.server.GetVotes().subscribe(result => {
        this.data = result;
      });
    }, 5000);
  }

  onSelect(event) {
    this.router.navigate(['/application-details/', event.name]);
  }
}
