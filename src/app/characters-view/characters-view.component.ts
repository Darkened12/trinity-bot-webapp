import { Component, EventEmitter, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { ICharacterNames } from '../services/backend.models';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-characters-view',
  templateUrl: './characters-view.component.html',
  styleUrls: ['./characters-view.component.css']
})
export class CharactersViewComponent implements OnInit {
  cfNames = new ReplaySubject<ICharacterNames[]>(1);
  tagNames = new ReplaySubject<ICharacterNames[]>(1);
  charactersToggle = new BehaviorSubject<string>('CF');

  constructor(public backend: BackendService) {
    this.backend.getAllCharacterNames().subscribe(
      (characterNames: ICharacterNames[]) => {
        this.cfNames.next(
          characterNames.filter((value: ICharacterNames) => value.gamePrefix === 'cf')
        );
        this.tagNames.next(
          characterNames.filter((value: ICharacterNames) => value.gamePrefix === 'tag')
        );
      }
    );
   }


  *characterNamesInChunks(names: string[], chunkSize: number): Iterable<string[]> {
    for (let i = 0; i < names.length; i += chunkSize) {
      yield names.slice(i, i + chunkSize);
    }
  }
   
  ngOnInit(): void {
  }

}
