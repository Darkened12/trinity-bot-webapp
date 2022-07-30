import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterSelectionViewComponent } from './character-selection-view/character-selection-view.component';
import { CharacterViewComponent } from './character-view/character-view.component';
import { CharactersViewComponent } from './characters-view/characters-view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'app', component: CharacterSelectionViewComponent},
  {path: 'app/:gamePrefix/:characterName', component: CharacterViewComponent},
  {path: 'app/characters', component: CharactersViewComponent},
  {path: '**', pathMatch: 'full', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
