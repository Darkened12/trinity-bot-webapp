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
      return 'width: 25%; height: 25%; margin-left: 15px';
    }
    return ';';
  }

  ngOnInit(): void {
  }

}
