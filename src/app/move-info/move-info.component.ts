import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, QueryList, ViewChildren } from '@angular/core';
import { filter, Subject } from 'rxjs';
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

  @ViewChildren('movesDiv') movesDiv!: QueryList<any>;

  constructor(
    private _backend: BackendService,
    private urlParser: UrlRouterParsingService,
    @Inject(DOCUMENT) private document: Document
  ) {     this._initData(); }

  private onAnchorDirectLink(moveAnchor: string) {
    this.movesDiv.changes.subscribe(t => {
      this.document.getElementById(moveAnchor)?.scrollIntoView();
    });
  }

  private _initData() {
    this.urlParser.gamePrefix().subscribe((gamePrefix: string) => {
      this.urlParser.characterName().subscribe((characterName: string) => {
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
    this.urlParser.moveAnchor().subscribe((moveAnchor: string) => {
      this.onAnchorDirectLink(moveAnchor);
    })

  }
}
