import { Component, Input, OnInit } from '@angular/core';
import { IMove } from '../../services/backend.models';

@Component({
  selector: 'app-move-info-notes',
  templateUrl: './move-info-notes.component.html',
  styleUrls: ['./move-info-notes.component.css']
})
export class MoveInfoNotesComponent implements OnInit {
  @Input() move!: IMove;
  constructor() { }

  ngOnInit(): void {
  }

}
