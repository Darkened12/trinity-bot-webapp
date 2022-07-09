import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IMove } from '../services/backend.models';
import { BackendService } from '../services/backend.service';
import { UrlRouterParsingService } from '../services/url-router-parsing.service';

@Component({
  selector: 'app-move-info',
  templateUrl: './move-info.component.html',
  styleUrls: ['./move-info.component.css']
})
export class MoveInfoComponent implements OnInit {
  moves: Subject<Array<IMove>> = new Subject();
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
    'blockstop',
    'P1',
    'P2',
    'cancel'
  ];
  constructor(private _backend: BackendService, private urlParser: UrlRouterParsingService) { }

  getSpriteUrl(url: string): string {
    return `${this._backend.endpoint}${this.urlParser.gamePrefix}/${url}`;
  }

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
    const characterObservable: Observable<Array<IMove>> = this._backend.getAllMovesFromCharacter(
      this.urlParser.gamePrefix, this.urlParser.characterName
    );
    characterObservable.subscribe((moves: Array<IMove>) => this.moves.next(moves));
  }

}
