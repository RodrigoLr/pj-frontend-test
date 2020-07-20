import { Injectable } from '@angular/core';
import { Pokemon } from '../model/pokemon';
import { PokemonService } from '../service/pokemon.service';

@Injectable()
export class PokemonListService {

  page = 1;
  limit = 24;

  pokemons: Array<Pokemon> = [];

  constructor(private pokemonService: PokemonService) { }

  fetch(): void {
    this.pokemonService.fetch({ limit: this.limit, offset: this.page * this.limit })
      .subscribe(
        res => {
          res.results
            .forEach(element => {
              const id = this.getId(element.url);
              this.pokemons.push(
                new Pokemon(
                  id,
                  element.name,
                  element.url,
                  this.isFavorite(id)
                )
              );
            });
        }, err => {
          console.error(err);
        }
      );
  }

  getId(url: string): number {
    const urlSplitted = url.split('/');
    return +urlSplitted[urlSplitted.length - 2];
  }

  getSprite(id: number): string {
    return this.pokemonService.apiSpritesUrl + id + '.png';
  }

  isFavorite(id: number): boolean {
    return !!localStorage.getItem(id.toString());
  }

  toggleFavorite(id: number): void {
    if (this.isFavorite(id)) {
      localStorage.removeItem(id.toString());
    } else {
      localStorage.setItem(id.toString(), id.toString());
    }
    this.pokemons.filter(el => el.id === id).forEach(el => el.favorite = !el.favorite);
  }

  loadMorePokemons(): void {
    this.page = this.page + 1;
    this.fetch();
  }

}
