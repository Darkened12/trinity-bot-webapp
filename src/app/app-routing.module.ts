import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterSelectionComponent } from './character-selection/character-selection.component';
import { CharacterViewComponent } from './character-view/character-view.component';

const routes: Routes = [
  {path: '', component: CharacterSelectionComponent},
  {path: ':gamePrefix/:characterName', component: CharacterViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
