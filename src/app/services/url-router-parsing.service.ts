import { Injectable } from '@angular/core';
import { NavigationEnd, Router} from '@angular/router';
import { BehaviorSubject, filter, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlRouterParsingService {
  private _characterNameEmmiter: BehaviorSubject<string> = new BehaviorSubject('');
  private _gamePrefixEmmiter: BehaviorSubject<string> = new BehaviorSubject('');
  private _moveAnchorEmmiter: BehaviorSubject<string> = new BehaviorSubject('');

  constructor(private _router: Router) { 
    this._router.events.subscribe((events) => {
      if (events instanceof NavigationEnd) {
        const segments: string[] = this._splitUrlInSegments(events.url);
        if (segments[0] !== undefined && segments[0] !== this._gamePrefixEmmiter.getValue()) {
          this._gamePrefixEmmiter.next(segments[0]);
        }
        if (segments[1] !== undefined) {
          const characterPath: string = segments[1]
          if (characterPath.includes('#')) {
            const tempSegments: string[] = characterPath.split('#');
            if (this._characterNameEmmiter.getValue() !== tempSegments[0]) { 
              this._characterNameEmmiter.next(tempSegments[0]);
              this._moveAnchorEmmiter.next(tempSegments[1]) 
            }
            
          }
          else { this._characterNameEmmiter.next(characterPath); }
        }
      }

    })
  }

  private _splitUrlInSegments(url: string): string[] {
    return url.split('/').slice(2);
  }

  private _parseEmptyValue(value: string): boolean {
    return value !== '';
  }

  gamePrefix(): Observable<string> {
    return this._gamePrefixEmmiter.pipe(filter(this._parseEmptyValue));
  }

  characterName(): Observable<string> {
    return this._characterNameEmmiter.pipe(filter(this._parseEmptyValue));
  }

  moveAnchor(): Observable<string> {
    return this._moveAnchorEmmiter.pipe(filter(this._parseEmptyValue));
  }
}
