import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-move-info-placeholder',
  templateUrl: './move-info-placeholder.component.html',
  styleUrls: ['./move-info-placeholder.component.css']
})
export class MoveInfoPlaceholderComponent implements OnInit {

  constructor(public utils: UtilsService) { }

  ngOnInit(): void {
  }

}
