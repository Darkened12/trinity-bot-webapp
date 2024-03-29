import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, combineLatest} from 'rxjs';
import { ICharacter, ICharacterNames, IMove, IMoveList} from './backend.models';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  endpoint: string = 'https://kajun-bot.fly.dev/api/';
  constructor(private http: HttpClient) { }

  getAllCharacterNames(): Observable<Array<ICharacterNames>> {
    const cfObservable = this.http.get<string[]>(`${this.endpoint}cf/get_characters`);
    const tagObservable = this.http.get<string[]>(`${this.endpoint}tag/get_characters`);
    const characters = new Observable<Array<ICharacterNames>>(subscriber => {
      combineLatest([cfObservable, tagObservable]).subscribe(
        ([cfData, tagData]) => subscriber.next([
          {'gamePrefix': 'cf', 'characterNames': cfData},
          {'gamePrefix': 'tag', 'characterNames': tagData}
        ])
      )
    });
    return characters;
  }

  parseSpriteUrl(url: string): string {
    return `${this.endpoint}${url}`;
    
  }

  getCharacter(gamePrefix: string, characterName: string): Observable<ICharacter> {
    return this.http.get<ICharacter>(`${this.endpoint}${gamePrefix}/${characterName}`);
  }


  getMoveList(gamePrefix: string, characterName: string): Observable<Array<IMoveList>> {
    return this.http.get<Array<IMoveList>>(
      `${this.endpoint}${gamePrefix}/${characterName}/get_move_list`
    ) as Observable<Array<IMoveList>>
  }


  getAllMovesFromCharacter(gamePrefix: string, characterName: string): Observable<Array<IMove>> {
    return this.http.get<Array<IMove>>(`${this.endpoint}${gamePrefix}/${characterName}/get_all_moves`);
  }

  getIconUrl(gamePrefix: string, characterName: string): string {
    return `${this.endpoint}${gamePrefix}/${characterName}/icon.png`
  }
  
}
