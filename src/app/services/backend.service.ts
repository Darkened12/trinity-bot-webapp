import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private endpoint: string = 'http://127.0.0.1:5000/';
  constructor(private http: HttpClient) { }

  getAllCharacterNames(): string[][] {
    const cfObservable = this.http.get<string[]>(`${this.endpoint}cf/get_characters`);
    const tagObservable = this.http.get<string[]>(`${this.endpoint}tag/get_characters`);
    let cfCharacters: string[] = [];
    let tagCharacters: string[] = [];
    cfObservable.subscribe((data: string[]) => data.forEach((value) => cfCharacters.push(value)));
    tagObservable.subscribe((data: string[]) => data.forEach((value) => tagCharacters.push(value)));
    return [cfCharacters, tagCharacters]
  }
  
}
