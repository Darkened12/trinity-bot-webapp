import { Component, Input, OnInit } from '@angular/core';
import { IMove } from '../services/backend.models';

@Component({
  selector: 'app-move-info-title',
  templateUrl: './move-info-title.component.html',
  styleUrls: ['./move-info-title.component.css']
})
export class MoveInfoTitleComponent implements OnInit {
  @Input() move!: IMove;
  constructor() { }

  ngOnInit(): void {
  }

}
