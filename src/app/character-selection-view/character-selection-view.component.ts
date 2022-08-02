import { Component, OnInit } from '@angular/core';
import { fadeInDownOnEnterAnimation, fadeInUpOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'app-character-selection-view',
  templateUrl: './character-selection-view.component.html',
  styleUrls: ['./character-selection-view.component.css'],
  animations: [
    fadeInDownOnEnterAnimation(),
    fadeInUpOnEnterAnimation()
  ]
})
export class CharacterSelectionViewComponent implements OnInit {
  textInputClass = 'form-control-lg';
  constructor() { }

  ngOnInit(): void {
  }

}
