import { Injectable } from '@angular/core';
import { Pokemon, pokemonGenders } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  static STORAGE_POKEMON_KEY = 'pokemons';

  pokemons: Pokemon[] = [];

  constructor() {
    this.loadPokemons();
  }

  addPokemon(name: string) {

    if (this.pokemons.find((pokemon) => pokemon.name === name)) {
      return;
    }

    this.pokemons.push({
      name,
      gender: this.getRandomIndexInGenderArray(),
    });

    this.storePokemons();

    //this.loggingService.logText(`adding pokemon ${ this.newPokemonName }`);
    //this.showAddedPokemonNotif();
  }

  deletePokemon(index: number) {
    this.pokemons.splice(index, 1);
    //this.showDeletedPokemonNotif();
  }

  storePokemons() {
    localStorage.setItem(PokemonService.STORAGE_POKEMON_KEY, JSON.stringify(this.pokemons));
  }

  loadPokemons() {
    const pokemonsStr = localStorage.getItem(PokemonService.STORAGE_POKEMON_KEY);
    if (!pokemonsStr) return;
    this.pokemons = JSON.parse(pokemonsStr);
  }

  getRandomIndexInGenderArray() {
    return pokemonGenders[Math.floor(Math.random() * pokemonGenders.length)];
  }
}
