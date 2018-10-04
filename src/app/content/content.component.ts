import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  color = 'primary';
  mode = 'determinate';
  value = 0;
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

  loaded() {
    this.value == 100 ? this.value = 0 : this.value = 100;
  }

}
