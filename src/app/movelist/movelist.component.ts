import { Component, Input, OnInit } from '@angular/core';
import { fadeInLeftOnEnterAnimation } from 'angular-animations';
import { Observable } from 'rxjs';
import { IMoveList } from '../services/backend.models';

@Component({
  selector: 'app-movelist',
  templateUrl: './movelist.component.html',
  styleUrls: ['./movelist.component.css'],
  animations: [
    fadeInLeftOnEnterAnimation()
  ]
})
export class MovelistComponent implements OnInit {
  @Input() moveList!: Observable<IMoveList[]>;

  constructor() { }

  ngOnInit(): void { }

}
