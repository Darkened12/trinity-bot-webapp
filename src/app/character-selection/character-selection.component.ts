import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatOptionSelectionChange } from '@angular/material/core';
import { Observable, Subject } from 'rxjs';
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
  optionSelected = '';

  
  characterObservables: Observable<string[]>[] = [];
  formGroup: FormGroup = this.fb.group({
    'characterName' : ['']
  })

  constructor(private _backend: BackendService, private fb: FormBuilder) {}

  initForm(){
    this.formGroup.get('characterName')?.valueChanges.subscribe(response => {
      console.log('data is ', response);
      
    })
  }

  onSubmit() {
    console.log(this.optionSelected);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  onOptionSelection(event: any) {
    // let value = (event.target as HTMLInputElement).value;
    console.log(event.option)
    
  }

  ngOnInit(): void {
    const characterObservables: Observable<string[]>[] = this._backend.getAllCharacterNames();
    characterObservables.forEach((observable: Observable<string[]>) => this.characterObservables.push(observable)) 
    this.initForm();
  }
}
