import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BackendService } from '../services/backend.service';
import { CharacterModel } from './character-selection.models';


@Component({
  selector: 'app-character-selection',
  templateUrl: './character-selection.component.html',
  styleUrls: ['./character-selection.component.css']
})
export class CharacterSelectionComponent implements OnInit {
  characters: CharacterModel[] = [];
  options: string[] = ['a'];

  characterObservables: Observable<string[]>[] = [];

  constructor(private _backend: BackendService) { }

  private _updateCharacters(characterNames: string[], gameName: string): void {
    for (let name of characterNames) {
      console.log(name);
      this.characters.push({'name': name, 'gameName': gameName});
    }
    console.log(characterNames);
    console.log(this.characters);
    this.options = this._getParseCharacterNames();
  }

  private _getParseCharacterNames(): string[] {
    let parsedNames: string[] = [];
    this.characters.forEach((characterObj: CharacterModel) => parsedNames.push(
      `(${characterObj.gameName}) ${characterObj.name}`
    ))
    return parsedNames;
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  ngOnInit(): void {
    const characterObservables: Observable<string[]>[] = this._backend.getAllCharacterNames();
    characterObservables.forEach((observable: Observable<string[]>) => this.characterObservables.push(observable)) 

  }
}
