import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  *range(value: number): Iterable<number> {
    for (let i = 0; i < value; i++) {
      yield i;
    }
  }
}
