import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  @Output() spriteCheckBox = new EventEmitter<boolean>();
  
  constructor() { }

  onSpriteCheckBoxEvent(event: boolean) {
    this.spriteCheckBox.emit(event);
  }

  ngOnInit(): void {
  }

}
