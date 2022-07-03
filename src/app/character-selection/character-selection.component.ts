import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { BackendService } from '../services/backend.service';


@Component({
  selector: 'app-character-selection',
  templateUrl: './character-selection.component.html',
  styleUrls: ['./character-selection.component.css']
})
export class CharacterSelectionComponent implements OnInit {

  characterObservables: Observable<string[]>[] = [];
  optionSelected: Subject<string> = new Subject();

  matchedOptions: string[] = [];
  formGroup: FormGroup = this._fb.group({
    'characterName' : ['']
  })

  constructor(
    private _backend: BackendService, 
    private _fb: FormBuilder
  ) { this.optionSelected.subscribe((option: string) => {
        this.matchedOptions = [];

        this.characterObservables[0].subscribe((names: string[]) => {
          this._getMatchedNames(names, option).
            forEach((name: string) => this.matchedOptions.push(`(BBCF) ${name}`));
        });

        this.characterObservables[1].subscribe((names: string[]) => {
          this._getMatchedNames(names, option).
            forEach((name: string) => this.matchedOptions.push(`(BBTAG) ${name}`));
        });
  })}

  private _parseCharacterName(characterName: string): string {
    return characterName.replace('_', ' ');
  }

  private _getMatchedNames(characterNames: string[], option: string): string[] {
    let matchedOptions: string[] = characterNames.filter(
      (name: string) => name.toLowerCase().includes(option.toLowerCase())
      );
    return matchedOptions.map(this._parseCharacterName);
  }

  initForm() {
    const formObservable = this.formGroup.get('characterName')?.valueChanges;
    formObservable?.subscribe(response => {
      this.optionSelected.next(response);
    })
  }

  ngOnInit(): void {
    const characterObservables: Observable<string[]>[] = this._backend.getAllCharacterNames();
    characterObservables.forEach((observable: Observable<string[]>) => {
      this.characterObservables.push(observable);
    }) 
    this.initForm();
  }
}
