import {Component, OnInit} from '@angular/core';
import {ServerServices} from '../../server.services';
import {Router} from '@angular/router';


@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  public apps: any;
  public data: any;

  constructor(private server: ServerServices, private router: Router) {
    if (window.innerWidth < 500) {
      this.showLegend = false;
    }
    this.server.GetAllApps().subscribe(result => {
      this.apps = result;
    });
    this.server.GetVotes().subscribe(result => {
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

  // data: any[] = [
  //   {
  //     'name': 'Application 1',
  //     'value': 357
  //   },
  //   {
  //     'name': 'Application 2',
  //     'value': 127
  //   },
  //   {
  //     'name': 'Application 3',
  //     'value': 621
  //   },
  //   {
  //     'name': 'Application 4',
  //     'value': 12
  //   },
  //   {
  //     'name': 'Application 5',
  //     'value': 68
  //   },
  //   {
  //     'name': 'Application 6',
  //     'value': 345
  //   },
  //   {
  //     'name': 'Application 7',
  //     'value': 54
  //   },
  //   {
  //     'name': 'Application 8',
  //     'value': 754
  //   },
  //   {
  //     'name': 'Application 9',
  //     'value': 157
  //   },
  //   {
  //     'name': 'Application 10',
  //     'value': 954
  //   }
  // ];
  // todo Uradi responsive tj da kod hosta proveris velicinu, ako je mobile showLegend=false

  // options
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

  onSelect(event) {
    this.router.navigate(['/application-details/', event.name]);
  }


}
