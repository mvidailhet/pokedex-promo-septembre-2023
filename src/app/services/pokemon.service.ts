import { Injectable } from '@angular/core';
import { Pokemon, pokemonGenders } from '../models/pokemon';
import { LoggingService } from './logging.service';
import { NotificationsService } from './notifications.service';
import { ApiService, GetPokemonsRes } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  static STORAGE_POKEMON_KEY = 'pokemons';

  pokemons: Pokemon[] = [];

  constructor(
    private loggingService: LoggingService,
    private notificationsService: NotificationsService,
    private apiService: ApiService
  ) {
    this.apiService.getPokemons()
    .subscribe((pokemons: Pokemon[]) => {
      this.pokemons = pokemons;
    });
  }

  addPokemon(name: string) {
    if (this.pokemons.find((pokemon) => pokemon.name === name)) {
      return;
    }

    const pokemon = {
      name,
      gender: this.getRandomIndexInGenderArray(),
    };

    this.pokemons.push(pokemon);

    this.apiService.postPokemon(pokemon);

    this.loggingService.logText(`adding pokemon ${name}`);
    this.notificationsService.showNotification(`Le pokemon ${ name } a été ajouté`, 'success');
  }

  deletePokemon(index: number) {
    this.pokemons.splice(index, 1);
    this.notificationsService.showNotification(`Le pokemon a été supprimé`, 'danger');
  }

  storePokemons() {
    localStorage.setItem(
      PokemonService.STORAGE_POKEMON_KEY,
      JSON.stringify(this.pokemons)
    );
  }

  loadPokemons() {
    const pokemonsStr = localStorage.getItem(
      PokemonService.STORAGE_POKEMON_KEY
    );
    if (!pokemonsStr) return;
    this.pokemons = JSON.parse(pokemonsStr);
  }

  getRandomIndexInGenderArray() {
    return pokemonGenders[Math.floor(Math.random() * pokemonGenders.length)];
  }
}
