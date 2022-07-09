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
  constructor(private _backend: BackendService, private urlParser: UrlRouterParsingService) { }

  getSpriteUrl(url: string): string {
    return `${this._backend.endpoint}${this.urlParser.gamePrefix}/${url}`;
  }

  ngOnInit(): void {
    const characterObservable: Observable<Array<IMove>> = this._backend.getAllMovesFromCharacter(
      this.urlParser.gamePrefix, this.urlParser.characterName
    );
    characterObservable.subscribe((moves: Array<IMove>) => this.moves.next(moves));
  }

}
