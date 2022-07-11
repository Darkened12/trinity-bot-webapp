import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterSelectionViewComponent } from './character-selection-view/character-selection-view.component';
import { CharacterViewComponent } from './character-view/character-view.component';

const routes: Routes = [
  {path: '', component: CharacterSelectionViewComponent},
  {path: ':gamePrefix/:characterName', component: CharacterViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
