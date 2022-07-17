import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ICharacter } from '../services/backend.models';

@Component({
  selector: 'app-character-navbar-bottom',
  templateUrl: './character-navbar-bottom.component.html',
  styleUrls: ['./character-navbar-bottom.component.css']
})
export class CharacterNavbarBottomComponent implements OnInit {
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
