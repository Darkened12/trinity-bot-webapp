import { Component, Input, OnInit } from '@angular/core';
import { IMove } from '../../services/backend.models';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-move-info-sprite',
  templateUrl: './move-info-sprite.component.html',
  styleUrls: ['./move-info-sprite.component.css']
})
export class MoveInfoSpriteComponent implements OnInit {
  @Input() move!: IMove;
  constructor(private _backend: BackendService) { }

  getSpriteUrl(url: string): string {
    return this._backend.parseSpriteUrl(url);
    
  }

  ngOnInit(): void {
  }

}
