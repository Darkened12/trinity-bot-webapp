import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { ICharacter, IMove } from '../services/backend.models';
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
    'P1',
    'P2',
    'cancel'
  ];
  @ViewChildren('movesDiv') movesDiv!: QueryList<any>;

  constructor(
    private _backend: BackendService,
    private urlParser: UrlRouterParsingService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {     this._initData(); }

  getSpriteUrl(url: string): string {
    return `${this._backend.endpoint}/${url}`;
    
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

  private onAnchorDirectLink(moveAnchor: string) {
    this.movesDiv.changes.subscribe(t => {
      this.document.getElementById(moveAnchor)?.scrollIntoView();
    });
  }

  private _initData() {
    this.urlParser.gamePrefix.subscribe((gamePrefix: string) => {
      this.urlParser.characterName.subscribe((characterName: string) => {
        console.log(gamePrefix)
        console.log(characterName)
        const moves = this._backend.getAllMovesFromCharacter(
          gamePrefix, characterName
        );
        moves.subscribe((moves: IMove[]) => this.moves.next(moves));
      })
    })
    
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.urlParser.moveAnchor.subscribe((moveAnchor: string) => {
      this.onAnchorDirectLink(moveAnchor);
    })

  }
}
