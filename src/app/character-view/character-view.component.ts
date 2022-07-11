import { Component, Inject, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character-view.component.html',
  styleUrls: ['./character-view.component.css']
})
export class CharacterViewComponent implements OnInit {
  textInputClass = 'form-control-sm';
  imgClass = '-small';
  constructor() { }
  ngOnInit(): void { }
}
