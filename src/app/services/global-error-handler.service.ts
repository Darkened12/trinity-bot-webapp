import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService {

  constructor(private _router: Router) { }

  onError(error: any) { }
}
