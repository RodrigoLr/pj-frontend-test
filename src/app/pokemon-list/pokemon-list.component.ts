import { Component, OnInit } from '@angular/core';

import { PokemonListService } from './pokemon-list.service';
import { Pokemon } from '../model/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: [
    './pokemon-list.component.scss'
  ],
  providers: [
    PokemonListService
  ]
})
export class PokemonList implements OnInit {

  throttle = 300;
  scrollDistance = 1;

  constructor(private pokemonListService: PokemonListService) { }

  ngOnInit(): void {
    this.pokemonListService.fetch();
  }

  get pokemons(): Array<Pokemon> {
    return this.pokemonListService.pokemons;
  }

  getSprite = (id: number) => this.pokemonListService.getSprite(id);
  onScrollDown = () => this.pokemonListService.loadMorePokemons();
  toggleFavorite = (id: number) => this.pokemonListService.toggleFavorite(id);

}
