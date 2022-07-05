import { Injectable } from '@angular/core';
import levenshtein from 'js-levenshtein';
import { IStringMatching } from './string-matching.models';

@Injectable({
  providedIn: 'root'
})
export class StringMatchingService {
  private _sortByLevenshteinDistance(firstElement: IStringMatching, secondElement: IStringMatching) {
    return firstElement.levenshteinDistance - secondElement.levenshteinDistance;
  }

  between(stringA: string, stringB: string): number {
    return levenshtein(stringA, stringB);
  }

  match(string_: string, array: Array<string>): Array<string> {
    let matchedArray: Array<IStringMatching> = [];
    array.forEach((value: string) => matchedArray.push({
      'value': value, levenshteinDistance: this.between(string_, value)
    }))
    matchedArray =  matchedArray.sort(this._sortByLevenshteinDistance);
    return matchedArray.map((value: IStringMatching) => value.value);
  }

  constructor() {}
}
