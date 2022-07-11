import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, Observable } from 'rxjs';
import { BackendService } from '../services/backend.service';
import { UrlRouterParsingService } from '../services/url-router-parsing.service';

@Component({
  selector: 'app-movelist',
  templateUrl: './movelist.component.html',
  styleUrls: ['./movelist.component.css']
})
export class MovelistComponent implements OnInit {
  moveNames!: Observable<string[]>;
  fragment!: string;

  constructor(
    public urlParser: UrlRouterParsingService, 
    private _backend: BackendService,
    private route: ActivatedRoute
  ) { 
    this.urlParser.gamePrefix.pipe(filter(this.urlParser.parseEmptyValue)).subscribe((gamePrefix: string) => {
      this.urlParser.characterName.pipe(filter(this.urlParser.parseEmptyValue)).subscribe((characterName: string) => {
        if (this.urlParser.hasEmmited()) {
          this.moveNames = this._backend.getAllMoveNamesFromCharacter(
            gamePrefix, characterName
          );
        }
      })
    })
    
  }
  ngOnInit(): void {

  }

}
