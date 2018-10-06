import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  tiles: any[] = [
    // {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 4, rows: 1},
    {text: 'Three', cols: 4, rows: 1},
    {text: 'Four', cols: 4, rows: 1},
    {text: 'Five', cols: 9, rows: 2},
    {text: 'Six', cols: 3, rows: 2},
    {text: 'Seven', cols: 6, rows: 1},
    {text: 'Eight', cols: 6, rows: 1},
  ];

  constructor() { }

  ngOnInit() {
  }

}
