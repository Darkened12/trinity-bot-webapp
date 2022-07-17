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
import { CharacterNavbarBottomComponent } from './character-navbar-bottom/character-navbar-bottom.component';
import { MovelistDropupComponent } from './character-navbar-bottom/movelist-dropup/movelist-dropup.component';
import { CharacterInfoButtonComponent } from './character-navbar-bottom/character-info-button/character-info-button.component';
import { MoveSpriteTogglerComponent } from './character-navbar-bottom/move-sprite-toggler/move-sprite-toggler.component';
import { MoveInfoPlaceholderComponent } from './move-info/move-info-placeholder/move-info-placeholder.component';
import { CharacterInfoPlaceholderComponent } from './character-info/character-info-placeholder/character-info-placeholder.component';
import { MovelistPlaceholderComponent } from './movelist/movelist-placeholder/movelist-placeholder.component';
import { CharacterNavbarTopComponent } from './character-navbar-top/character-navbar-top.component';

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
    CharacterNavbarBottomComponent,
    MovelistDropupComponent,
    CharacterInfoButtonComponent,
    MoveSpriteTogglerComponent,
    MoveInfoPlaceholderComponent,
    CharacterInfoPlaceholderComponent,
    MovelistPlaceholderComponent,
    CharacterNavbarTopComponent
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
