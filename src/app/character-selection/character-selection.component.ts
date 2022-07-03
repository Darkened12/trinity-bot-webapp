import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable, Subject, map, Subscriber } from 'rxjs';
import { BackendService } from '../services/backend.service';


@Component({
  selector: 'app-character-selection',
  templateUrl: './character-selection.component.html',
  styleUrls: ['./character-selection.component.css']
})
export class CharacterSelectionComponent implements OnInit {

  characterObservables: Observable<string[]>[] = [];
  optionSelected: Subject<string> = new Subject();
  formGroup: FormGroup = this._fb.group({
    'characterName' : ['']
  })

  constructor(
    private _backend: BackendService, 
    private _fb: FormBuilder
  ) { }

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
