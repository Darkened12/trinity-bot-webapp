import { Injectable } from '@angular/core';
import levenshtein from 'js-levenshtein';

@Injectable({
  providedIn: 'root'
})
export class StringMatchingService {
  distance: number = 3;

  between(stringA: string, stringB: string): boolean {
    return levenshtein(stringA, stringB) <= this.distance;
  }

  onArray(string_: string, array: Array<string>): Array<string> {
    return array.filter((value: string) => this.between(string_, value));
  }

  constructor() {}
}
