import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BackendService {
  endpoint: string = 'http://127.0.0.1:5000/';
  constructor(private http: HttpClient) { }

  getAllCharacterNames(): Observable<string[]>[] {
    const cfObservable = this.http.get<string[]>(`${this.endpoint}cf/get_characters`);
    const tagObservable = this.http.get<string[]>(`${this.endpoint}tag/get_characters`);
    return [cfObservable, tagObservable]
  }
  
}
