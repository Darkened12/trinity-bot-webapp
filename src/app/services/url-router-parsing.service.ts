import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UrlRouterParsingService {
  characterName: string = '';
  gamePrefix: string = '';

  constructor(private router: Router) { 
    this._parseActiveUrl();
  }

  private _parseActiveUrl(): void {
    const splitUrl: string[] = this.router.url.split('/').slice(1);
    this.gamePrefix = splitUrl[0];
    this.characterName = splitUrl[1];
  }
}
