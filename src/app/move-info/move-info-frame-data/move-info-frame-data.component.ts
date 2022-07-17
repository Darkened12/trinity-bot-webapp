import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IMove } from '../../services/backend.models';

@Component({
  selector: 'app-move-info-frame-data',
  templateUrl: './move-info-frame-data.component.html',
  styleUrls: ['./move-info-frame-data.component.css']
})
export class MoveInfoFrameDataComponent implements OnInit {
  moveProperties: string[] = [
    'damage',
    'startup',
    'active',
    'recovery',
    'frame_adv',
    'guard',
    'attribute',
    'invul',
    'blockstun',
    'P1',
    'P2',
    'cancel'
  ];

  @Input() move!: IMove;
  @Input() spriteCheckBox!: Observable<boolean>;
  @Input() isMobile: boolean = false;
  screenSizeObserver: Subject<boolean> = new Subject();

  constructor() { }

  private toTitle(str: string): string {
    let sentence = str.toLowerCase().split(" ");
    for (let i = 0; i < sentence.length; i++) {
      sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    
    return sentence.join(" ");
  }
  
  parseProperty(property: string): string {
    return this.toTitle(property.split('_').join(' '));
  }

  getMoveValueByProperty(move: IMove, property: string): string {
    const objKey = property as keyof typeof move;
    return move[objKey];
  }

  ngOnInit(): void {
  }

}
