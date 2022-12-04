import { Component, Input, OnInit } from '@angular/core';
import { fadeInLeftOnEnterAnimation } from 'angular-animations';
import { map, Observable, ReplaySubject } from 'rxjs';
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
  orderedMoveList: ReplaySubject<IMoveList[]> = new ReplaySubject(1);

  constructor() { }

  swapPositions(array: Array<any>, a: number, b: number): void {
    [array[a], array[b]] = [array[b], array[a]]
  }

  ngOnInit(): void {
    this.moveList.pipe(
      map((moveList: IMoveList[]) => {
        this.swapPositions(moveList, 2, 0)
        this.swapPositions(moveList, 1, 2)
        return moveList
      })
    ).subscribe((moveList: IMoveList[]) => {
      this.orderedMoveList.next(moveList);
    }) 
  
  }

}
