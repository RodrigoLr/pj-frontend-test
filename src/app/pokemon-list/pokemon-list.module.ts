import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { PokemonList } from './pokemon-list.component';

@NgModule({
  declarations: [
    PokemonList
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: PokemonList }]),
    InfiniteScrollModule
  ]
})
export class PokemonListModule { }
