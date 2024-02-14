import { Component } from '@angular/core';
import { LoggingService } from 'src/app/services/logging.service';

export interface Pokemon {
  name: string;
  gender: PokemonGender;
}

const pokemonGenders = ['male', 'female'] as const;
type PokemonGender = typeof pokemonGenders[number];

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent {
  newPokemonName?: string;
  isPokemonAdded = false;
  isPokemonDeleted = false;

  pokemons: Pokemon[] = [];

  constructor(private loggingService: LoggingService) {
    this.loggingService.logText('create pokemon list');
  }

  addPokemon() {
    if (this.newPokemonName === undefined) return;
    this.pokemons.push({
      name: this.newPokemonName,
      gender: this.getRandomIndexInGenderArray(),
    });

    this.showAddedPokemonNotif();
  }

  showAddedPokemonNotif() {
    this.isPokemonAdded = true;
    setTimeout(() => {
      this.isPokemonAdded = false;
    }, 3000);
  }

  showDeletedPokemonNotif() {
    this.isPokemonDeleted = true;
    setTimeout(() => {
      this.isPokemonDeleted = false;
    }, 3000);
  }

  onPokemonDelete(index: number) {
    this.pokemons.splice(index, 1);
    this.showDeletedPokemonNotif();
  }

  getRandomIndexInGenderArray() {
    return pokemonGenders[Math.floor(Math.random() * pokemonGenders.length)];
  }
}
