import { Routes } from '@angular/router';
import { CharacterListComponent } from './components/character/character-list/character-list.component';
import { ComicListComponent } from './components/comic/comic-list/comic-list.component';
import { SerieListComponent } from './components/serie/serie-list/serie-list.component';

export const publicRoutes: Routes = [
  { path: '', redirectTo: 'characters', pathMatch: 'full'},
  { path: 'characters', component: CharacterListComponent },
  { path: 'comics', component: ComicListComponent },
  { path: 'series', component: SerieListComponent },
  { path: '**', redirectTo:'characters', pathMatch: 'full'}
];
