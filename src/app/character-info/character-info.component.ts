import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subject, Subscriber } from 'rxjs';
import { ICharacter } from '../services/backend.models';
import { BackendService } from '../services/backend.service';
import { UrlRouterParsingService } from '../services/url-router-parsing.service';

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.css']
})
export class CharacterInfoComponent implements OnInit {
  character: Observable<ICharacter>;
  iconUrl: Subject<string> = new Subject();
  characterColor: Subject<string> = new Subject();
  constructor(private _backend: BackendService, private urlParser: UrlRouterParsingService) {
    this.character = this._backend.getCharacter(
      this.urlParser.gamePrefix, this.urlParser.characterName);
  }

  ngOnInit(): void {
    this.character.subscribe((character: ICharacter) => {
      this.iconUrl.next(`${this._backend.endpoint}${this.urlParser.gamePrefix}/${character.icon}`);
      console.log(`#${character.color}`);
      this.characterColor.next(`#${character.color}`);
    })
  }

}
