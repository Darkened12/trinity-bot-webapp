import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movelist-dropup',
  templateUrl: './movelist-dropup.component.html',
  styleUrls: ['./movelist-dropup.component.css']
})
export class MovelistDropupComponent implements OnInit {
  @Input() moveNames!: Observable<string[]>;
  constructor() { }

  ngOnInit(): void {
  }

}
