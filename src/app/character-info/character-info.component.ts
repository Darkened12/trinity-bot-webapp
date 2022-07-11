import { Component, OnInit } from '@angular/core';
import { filter, Subject} from 'rxjs';
import { ICharacter } from '../services/backend.models';
import { BackendService } from '../services/backend.service';
import { UrlRouterParsingService } from '../services/url-router-parsing.service';

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.css']
})
export class CharacterInfoComponent implements OnInit {
  character: Subject<ICharacter> = new Subject;

  constructor(
    private _backend: BackendService, 
    private urlParser: UrlRouterParsingService,
  ) {
    this.urlParser.gamePrefix().subscribe((gamePrefix: string) => {
      this.urlParser.characterName().subscribe((characterName: string) => {
        const characterObservable = this._backend.getCharacter(gamePrefix, characterName);
        characterObservable.subscribe((character: ICharacter) => this.character.next(character));
      })
    })
  }

  getIconUrl(rawUrl: string | undefined): string {
    return `${this._backend.endpoint}${rawUrl}`;
  }

  ngOnInit(): void {

  }

}
