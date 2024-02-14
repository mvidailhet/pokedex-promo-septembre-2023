import { Injectable } from '@angular/core';
import { Pokemon, pokemonGenders } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemons: Pokemon[] = [];

  addPokemon(name: string) {

    if (this.pokemons.find((pokemon) => pokemon.name === name)) {
      return;
    }

    this.pokemons.push({
      name,
      gender: this.getRandomIndexInGenderArray(),
    });
    //this.loggingService.logText(`adding pokemon ${ this.newPokemonName }`);
    //this.showAddedPokemonNotif();
  }

  deletePokemon(index: number) {
    this.pokemons.splice(index, 1);
    //this.showDeletedPokemonNotif();
  }

  getRandomIndexInGenderArray() {
    return pokemonGenders[Math.floor(Math.random() * pokemonGenders.length)];
  }
}
