import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, combineLatest} from 'rxjs';
import { ICharacterNames } from './backend.models';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  endpoint: string = 'http://192.168.0.10:5000/';
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
  
}
