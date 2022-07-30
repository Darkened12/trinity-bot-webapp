import { Component, Input, OnInit } from '@angular/core';
import { fadeInLeftOnEnterAnimation } from 'angular-animations';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movelist',
  templateUrl: './movelist.component.html',
  styleUrls: ['./movelist.component.css'],
  animations: [
    fadeInLeftOnEnterAnimation()
  ]
})
export class MovelistComponent implements OnInit {
  @Input() moveNames!: Observable<string[]>;

  constructor() { }

  ngOnInit(): void { }

}
