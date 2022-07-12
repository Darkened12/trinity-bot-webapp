import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICharacter } from '../services/backend.models';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.css']
})
export class CharacterInfoComponent implements OnInit {
  @Input() character!: Observable<ICharacter>;

  constructor(private _backend: BackendService) {}

  getIconUrl(rawUrl: string | undefined): string {
    return `${this._backend.endpoint}${rawUrl}`;
  }

  ngOnInit(): void {

  }

}
