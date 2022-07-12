import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICharacter } from '../services/backend.models';

@Component({
  selector: 'app-character-navbar-sm',
  templateUrl: './character-navbar-sm.component.html',
  styleUrls: ['./character-navbar-sm.component.css']
})
export class CharacterNavbarSmComponent implements OnInit {
  @Input() moveNames!: Observable<string[]>;
  @Input() character!: Observable<ICharacter>;
  constructor() { }

  ngOnInit(): void {
  }

}
