import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { BackendService } from '../services/backend.service';


@Component({
  selector: 'app-character-selection',
  templateUrl: './character-selection.component.html',
  styleUrls: ['./character-selection.component.css']
})
export class CharacterSelectionComponent implements OnInit {

  optionSelected = '';
  characterObservables: Observable<string[]>[] = [];
  formGroup: FormGroup = this.fb.group({
    'characterName' : ['']
  })

  constructor(private _backend: BackendService, private fb: FormBuilder) { }

  initForm(){
    const formObservable = this.formGroup.get('characterName')?.valueChanges;
    formObservable?.subscribe(response => {
      console.log('data is ', response);
      
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
