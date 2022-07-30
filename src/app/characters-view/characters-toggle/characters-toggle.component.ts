import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-characters-toggle',
  templateUrl: './characters-toggle.component.html',
  styleUrls: ['./characters-toggle.component.css']
})
export class CharactersToggleComponent implements OnInit {
  @Output() charactersToggle = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
