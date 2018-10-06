import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  opened: boolean = true;

  constructor(
    public router: Router,
  ) { }

  ngOnInit() {
  }

  routeToDashboard() {
    this.router.navigate(['dashboard']);
  }

  routeToForm() {
    this.router.navigate(['form']);
  }

}
