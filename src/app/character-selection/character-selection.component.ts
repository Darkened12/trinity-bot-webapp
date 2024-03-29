import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { interval, map, Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs';
import { BackendService } from '../services/backend.service';
import { StringMatchingService } from '../services/string-matching.service';
import { ICharacterNames } from '../services/backend.models';
import { IMatchedPartialCharacter, IPartialCharacter } from './character-selection.models';
import { Router } from '@angular/router';
import { GlobalErrorHandlerService } from '../services/global-error-handler.service';

@Component({
  selector: 'app-character-selection',
  templateUrl: './character-selection.component.html',
  styleUrls: ['./character-selection.component.css']
})
export class CharacterSelectionComponent implements OnInit {

  @Input() textInputClass: string = 'form-control-lg';
  @Input() imgClass: string = '';
  characterNames: Observable<Array<ICharacterNames>>;
  optionSelected: Subject<string> = new Subject();

  matchedCharacters: Observable<Array<IPartialCharacter>>;
  formGroup: FormGroup = this._fb.group({
    'characterName' : ['']
  })

  constructor(
    private _backend: BackendService, 
    private _stringMatching: StringMatchingService,
    private _fb: FormBuilder,
    private _router: Router,
    private _errorHandler: GlobalErrorHandlerService
  ) {
    this.characterNames = this._backend.getAllCharacterNames();
    this.matchedCharacters = new Observable(subscriber => {
      this.optionSelected.pipe(
        map((value: string) => value.replace(' ', '_'))).
          subscribe((option: string | IPartialCharacter) => {
            this.characterNames.subscribe((data: Array<ICharacterNames>) => {
              let characters: Array<IPartialCharacter> = this._getPartialCharacters(data);
              const parsedCharacters = characters.filter((character: IPartialCharacter) => {
                if (typeof option === 'string') {
                  return character.name.toLowerCase().includes(option.toLowerCase());
                }
                return character.name.toLowerCase().includes(option.name.toLowerCase());
                
            });
              subscriber.next(parsedCharacters);
            }
            )
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

  onSelect(character: IPartialCharacter) {
    this._router.navigate([`app/${character.gamePrefix}/${character.name}`]);
  }

  displayName(value: IPartialCharacter): string {
    if (value) {
      return value.name.split('_').join(' ');
    }
    return '';
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
