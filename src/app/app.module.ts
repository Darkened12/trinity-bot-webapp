import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TrinityHeaderComponent } from './trinity-header/trinity-header.component';
import { CharacterSelectionComponent } from './character-selection/character-selection.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import {MatInputModule} from '@angular/material/input'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CharacterViewComponent } from './character-view/character-view.component';
import { CharacterInfoComponent } from './character-info/character-info.component';
import { MoveInfoComponent } from './move-info/move-info.component';
import { MovelistComponent } from './movelist/movelist.component';
import { CharacterSelectionViewComponent } from './character-selection-view/character-selection-view.component';
import { MoveInfoFrameDataComponent } from './move-info/move-info-frame-data/move-info-frame-data.component';
import { MoveInfoSpriteComponent } from './move-info/move-info-sprite/move-info-sprite.component';
import { MoveInfoNotesComponent } from './move-info/move-info-notes/move-info-notes.component';
import { MoveInfoTitleComponent } from './move-info/move-info-title/move-info-title.component';
import { CharacterNavbarSmComponent } from './character-navbar-sm/character-navbar-sm.component';
import { MovelistDropupComponent } from './character-navbar-sm/movelist-dropup/movelist-dropup.component';
import { CharacterInfoButtonComponent } from './character-navbar-sm/character-info-button/character-info-button.component';
import { MoveSpriteTogglerComponent } from './character-navbar-sm/move-sprite-toggler/move-sprite-toggler.component';

@NgModule({
  declarations: [
    AppComponent,
    TrinityHeaderComponent,
    CharacterSelectionComponent,
    CharacterViewComponent,
    CharacterInfoComponent,
    MoveInfoComponent,
    MovelistComponent,
    CharacterSelectionViewComponent,
    MoveInfoFrameDataComponent,
    MoveInfoSpriteComponent,
    MoveInfoNotesComponent,
    MoveInfoTitleComponent,
    CharacterNavbarSmComponent,
    MovelistDropupComponent,
    CharacterInfoButtonComponent,
    MoveSpriteTogglerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
