import { Component, OnInit } from '@angular/core';
import { fadeInDownBigOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css'],
  animations: [
    fadeInDownBigOnEnterAnimation()
  ]
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
