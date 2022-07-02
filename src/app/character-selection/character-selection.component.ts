import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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

  control = new FormControl('Character');
  characterObservables: Observable<string[]>[] = [];
  optionSelectionSubject = new Subject<string>();
  private _selectedOption: string = '';
  selectedOption = '';
  value: string = '';

  constructor(private _backend: BackendService) {
    this.optionSelectionSubject.subscribe({next: (value) => this.setSelectedOption(value)});
   }

  getSelectedOption(): string {
    return this._selectedOption;
  }

  setSelectedOption(selectedOption: string): void {
    this._selectedOption = selectedOption;
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  onOptionSelection(event: Event) {
    let value = (event.target as HTMLInputElement).value;
    this.optionSelectionSubject.next(value);
  }

  ngOnInit(): void {
    const characterObservables: Observable<string[]>[] = this._backend.getAllCharacterNames();
    characterObservables.forEach((observable: Observable<string[]>) => this.characterObservables.push(observable)) 

  }
}
