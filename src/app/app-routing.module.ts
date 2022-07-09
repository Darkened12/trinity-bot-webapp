import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CharacterSelectionComponent } from './character-selection/character-selection.component';
import { CharacterComponent } from './character/character.component';

const routes: Routes = [
  {path: '', component: CharacterSelectionComponent},
  {path: ':gamePrefix/:characterName', component: CharacterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
