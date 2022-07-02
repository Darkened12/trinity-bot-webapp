import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { BackendService } from './services/backend.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title: string = 'trinity-frame-data';
  cf_character_names: string[] = [];
  tag_character_names: string[] = [];

  constructor(private backend: BackendService) {}
  
  ngOnInit() {
    // const character_names: string[][] = this.backend.getAllCharacterNames();
    // this.cf_character_names = character_names[0];
    // this.tag_character_names = character_names[1];
  }
}
