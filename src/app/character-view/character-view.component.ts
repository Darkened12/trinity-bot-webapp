import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { ICharacter, IMove } from '../services/backend.models';
import { BackendService } from '../services/backend.service';
import { GlobalErrorHandlerService } from '../services/global-error-handler.service';
import { UrlRouterParsingService } from '../services/url-router-parsing.service';

@Component({
  selector: 'app-character',
  templateUrl: './character-view.component.html',
  styleUrls: ['./character-view.component.css']
})
export class CharacterViewComponent implements OnInit {
  textInputClass = 'form-control-sm';
  imgClass = '-small';

  characterSubject: ReplaySubject<ICharacter> = new ReplaySubject(1);
  movesSubject: ReplaySubject<Array<IMove>> = new ReplaySubject(1);
  moveNamesSubject: ReplaySubject<Array<string>> = new ReplaySubject(1);
  spriteCheckBox: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private _backend: BackendService, 
    private _urlParser: UrlRouterParsingService,
    private _errorHandler: GlobalErrorHandlerService
    ) { }

  private _getMoveNames(moves: IMove[]): string[] {
    return moves.map((move: IMove) => move.move_name);
  }

  onSpriteCheckBoxEvent(event: boolean) {
    this.spriteCheckBox.next(event);
  }

  ngOnInit(): void { 
    this._urlParser.gamePrefix().subscribe((gamePrefix: string) => {
      this._urlParser.characterName().subscribe((characterName: string) => {
        
        this._backend.getCharacter(gamePrefix, characterName).subscribe(
          (character: ICharacter) => this.characterSubject.next(character),
          error => this._errorHandler.onError(error)
        );

        this._backend.getAllMovesFromCharacter(gamePrefix, characterName).subscribe(
          (moves: IMove[]) => {
            this.movesSubject.next(moves);
            this.moveNamesSubject.next(this._getMoveNames(moves));
          },
          error => this._errorHandler.onError(error)
        );
      });
    });
  }
}
