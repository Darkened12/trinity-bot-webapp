import { Injectable } from '@angular/core';
import { NavigationEnd, Router} from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlRouterParsingService {
  characterName: BehaviorSubject<string> = new BehaviorSubject('');
  gamePrefix: BehaviorSubject<string> = new BehaviorSubject('');
  moveAnchor: BehaviorSubject<string> = new BehaviorSubject('');

  parseEmptyValue(value: string): boolean {
    return value !== '';
  }

  constructor(private _router: Router) { 
    this._router.events.subscribe((events) => {
      if (events instanceof NavigationEnd) {
        const url: string = events.url;
        const segments: string[] = url.split('/').slice(1);
        if (segments[0] !== undefined && segments[0] !== this.gamePrefix.getValue()) {
          this.gamePrefix.next(segments[0]);
        }
        if (segments[1] !== undefined) {
          const characterPath: string = segments[1]
          if (characterPath.includes('#')) {
            const tempSegments: string[] = characterPath.split('#');
            if (this.characterName.getValue() !== tempSegments[0]) { 
              this.characterName.next(tempSegments[0]);
              this.moveAnchor.next(tempSegments[1]) 
            }
            
          }
          else { this.characterName.next(characterPath); }
        }
      }

    })
  }

  hasEmmited(): boolean {
    return this.gamePrefix.getValue() !== '' || this.characterName.getValue() !== '' || this.moveAnchor.getValue() !== '';
  }
}
