import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { interval, Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs';
import { BackendService } from '../services/backend.service';
import { StringMatchingService } from '../services/string-matching.service';
import { ICharacterNames } from '../services/backend.models';
import { IMatchedPartialCharacter, IPartialCharacter } from './character-selection.models';

@Component({
  selector: 'app-character-selection',
  templateUrl: './character-selection.component.html',
  styleUrls: ['./character-selection.component.css']
})
export class CharacterSelectionComponent implements OnInit {

  characterNames: Observable<Array<ICharacterNames>>;
  optionSelected: Subject<string> = new Subject();

  matchedCharacters: Observable<Array<IPartialCharacter>>;
  formGroup: FormGroup = this._fb.group({
    'characterName' : ['']
  })

  constructor(
    private _backend: BackendService, 
    private _stringMatching: StringMatchingService,
    private _fb: FormBuilder
  ) {
    this.characterNames = this._backend.getAllCharacterNames();
    this.matchedCharacters = new Observable(subscriber => {
      this.optionSelected.pipe(switchMap(() => interval(10000)));
      this.optionSelected.subscribe((option: string) => {
        this.characterNames.subscribe((data: Array<ICharacterNames>) => {
          let characters: Array<IPartialCharacter> = this._getPartialCharacters(data);
          const parsedCharacters = characters.filter((character: IPartialCharacter) => {
            return character.name.toLowerCase().includes(option.toLowerCase());
        });
          subscriber.next(parsedCharacters);
        })
      })
    });
  }

  private _getPartialCharacters(data: Array<ICharacterNames>): Array<IPartialCharacter> {
    let characters: Array<IPartialCharacter> = [];
    data.forEach((rawData: ICharacterNames) => {
      rawData.characterNames.forEach((name: string) => {
        characters.push({
          'name': name,
          'gamePrefix': rawData.gamePrefix,
          'iconUrl': `${this._backend.endpoint}${rawData.gamePrefix}/${name}/icon.png`
        })
      })
    })
    return characters;
  }

  private _sortByLevenshteinDistance(option: string, characters: Array<IPartialCharacter>): Array<IMatchedPartialCharacter> {
    let parsedCharacters: Array<IMatchedPartialCharacter> = [];
    characters.forEach((character: IPartialCharacter) => {
      let matchedCharacter: IMatchedPartialCharacter = {
        'gamePrefix': character.gamePrefix,
        'iconUrl': character.iconUrl,
        'name': character.name,
        'levenshteinDistance': 0
      }
      matchedCharacter.levenshteinDistance = this._stringMatching.between(option, this.removeGamePrefix(character.name))
      parsedCharacters.push(matchedCharacter)
    })
    return parsedCharacters.sort(
      (a: IMatchedPartialCharacter, b: IMatchedPartialCharacter) => a.levenshteinDistance - b.levenshteinDistance
    );
  }

  private _getMatchedCharacters(characters: Array<IPartialCharacter>): Array<IPartialCharacter> {
    return characters;
  }

  private _parseCharacterName(characterName: string): string {
    return characterName.replace('_', ' ');
  }

  private _getMatchedNames(characterNames: string[], option: string): string[] {
    const parsedCharacterNames: string[] = characterNames.map(this._parseCharacterName);
    const matchedOptions: string[] = this._stringMatching.match(
      option, parsedCharacterNames.map(this.removeGamePrefix));
    return matchedOptions;
  }


  getGamePrefix(selectedOption: string): string {
    if (selectedOption.includes('BBCF')) {
      return 'BBCF';
    } 
    else if (selectedOption.includes('BBTAG')) {
      return 'BBTAG';
    }
    throw new Error('Not Implemented')
  }

  removeGamePrefix(selectedOption: string): string {
    return selectedOption.replace('(BBCF) ', '').replace('(BBTAG) ', '');
  }

  getIconUrl(selectedOption: string): string {
    if (selectedOption.includes('BBCF')) {
      let parsedOption: string = selectedOption.replace('(BBCF) ', '');
      parsedOption = parsedOption.replace(' ', '_');
      return `${this._backend.endpoint}cf/${parsedOption}/icon.png`
    } 
    else if (selectedOption.includes('BBTAG')) {
      let parsedOption: string = selectedOption.replace('(BBTAG) ', '');
      parsedOption = parsedOption.replace(' ', '_');
      return `${this._backend.endpoint}tag/${parsedOption}/icon.png`
    }
    throw new Error('Not Implemented');
  }

  initForm() {
    const formObservable = this.formGroup.get('characterName')?.valueChanges;
    formObservable?.subscribe(response => {
      this.optionSelected.next(response);
    })
  }

  ngOnInit(): void {
    this.initForm();
  }
}
