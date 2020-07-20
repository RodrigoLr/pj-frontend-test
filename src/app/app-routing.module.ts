import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonList } from './pokemon-list/pokemon-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pokemon-list',
    pathMatch: 'full'
  },
  {
    path: 'pokemon-list',
    component: PokemonList,
    loadChildren: () => import('./pokemon-list/pokemon-list.module').then(m => m.PokemonListModule)
  },
  {
    path: '**',
    redirectTo: 'pokemon-list',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
