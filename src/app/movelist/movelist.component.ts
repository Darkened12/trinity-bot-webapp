import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
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
    this.urlParser.gamePrefix.subscribe((gamePrefix: string) => {
      this.urlParser.characterName.subscribe((characterName: string) => {
        this.moveNames = this._backend.getAllMoveNamesFromCharacter(
          gamePrefix, characterName
        );
      })
    })
    
  }
  ngOnInit(): void {

  }

}
