import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-move-sprite-toggler',
  templateUrl: './move-sprite-toggler.component.html',
  styleUrls: ['./move-sprite-toggler.component.css']
})
export class MoveSpriteTogglerComponent implements OnInit {
  @Output() checkBoxValue = new EventEmitter<boolean>();

  constructor() { }

  onCheckBoxSelect(value: boolean) {
    this.checkBoxValue.emit(value);
  }

  ngOnInit(): void {
  }

}
