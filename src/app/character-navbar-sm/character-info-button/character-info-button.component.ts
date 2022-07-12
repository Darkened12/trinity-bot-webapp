import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICharacter } from 'src/app/services/backend.models';

@Component({
  selector: 'app-character-info-button',
  templateUrl: './character-info-button.component.html',
  styleUrls: ['./character-info-button.component.css']
})
export class CharacterInfoButtonComponent implements OnInit {
  @Input() character!: Observable<ICharacter>;
  constructor() { }

  ngOnInit(): void {
  }

}
