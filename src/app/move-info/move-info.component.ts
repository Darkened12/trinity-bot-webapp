import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { filter, Observable, Subject } from 'rxjs';
import { IMove } from '../services/backend.models';
import { BackendService } from '../services/backend.service';
import { UrlRouterParsingService } from '../services/url-router-parsing.service';

@Component({
  selector: 'app-move-info',
  templateUrl: './move-info.component.html',
  styleUrls: ['./move-info.component.css']
})
export class MoveInfoComponent implements OnInit {
  @Input() moves!: Observable<Array<IMove>>;

  @ViewChildren('movesDiv') movesDiv!: QueryList<any>;

  constructor(
    private urlParser: UrlRouterParsingService,
    @Inject(DOCUMENT) private document: Document
  ) { }

  private onAnchorDirectLink(moveAnchor: string) {
    this.movesDiv.changes.subscribe(t => {
      this.document.getElementById(moveAnchor)?.scrollIntoView();
    });
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.urlParser.moveAnchor().subscribe((moveAnchor: string) => {
      this.onAnchorDirectLink(moveAnchor);
    })

  }
}
