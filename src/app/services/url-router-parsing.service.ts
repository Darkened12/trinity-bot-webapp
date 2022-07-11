import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UrlRouterParsingService {
  characterName: string = '';
  gamePrefix: string = '';
  moveAnchor: string = '';

  constructor(private router: Router) { 
    this._parseActiveUrl();
  }

  private _parseActiveUrl(): void {
    const splitUrl: string[] = this.router.url.split('/').slice(1);
    this.gamePrefix = splitUrl[0];
    this.characterName = splitUrl[1];
    if (this.characterName.includes('#')) {
      const tempSegments: string[] = this.characterName.split('#');
      this.characterName = tempSegments[0];
      this.moveAnchor = tempSegments[1];
    }
  }
}
