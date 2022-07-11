import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-trinity-header',
  templateUrl: './trinity-header.component.html',
  styleUrls: ['./trinity-header.component.css']
})
export class TrinityHeaderComponent implements OnInit {
  @Input() isSmall: boolean = false; 
  constructor() { }

  getImgStyle(): string {
    if (this.isSmall) { 
      return 'width: 15%; height: 15%; margin-left: 30px';
    }
    return ';';
  }

  ngOnInit(): void {
  }

}
