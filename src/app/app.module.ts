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
import {MatInputModule} from '@angular/material/input'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CharacterViewComponent } from './character-view/character-view.component';
import { CharacterInfoComponent } from './character-info/character-info.component';
import { MoveInfoComponent } from './move-info/move-info.component';
import { MovelistComponent } from './movelist/movelist.component';

@NgModule({
  declarations: [
    AppComponent,
    TrinityHeaderComponent,
    CharacterSelectionComponent,
    CharacterViewComponent,
    CharacterInfoComponent,
    MoveInfoComponent,
    MovelistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
