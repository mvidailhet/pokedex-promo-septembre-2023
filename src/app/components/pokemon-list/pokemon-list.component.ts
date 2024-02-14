import { Component } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { LoggingService } from 'src/app/services/logging.service';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent {
  newPokemonName?: string;
  isPokemonAdded = false;
  isPokemonDeleted = false;

  pokemons: Pokemon[] = this.pokemonService.pokemons;

  constructor(
    private loggingService: LoggingService,
    private pokemonService: PokemonService
  ) {}

  onAddPokemonBtnClick() {
    if (this.newPokemonName === undefined) return;
    this.pokemonService.addPokemon(this.newPokemonName);
    this.loggingService.logText(`adding pokemon ${this.newPokemonName}`);
    this.showAddedPokemonNotif();
  }

  onPokemonDelete(index: number) {
    this.pokemonService.deletePokemon(index);
    this.showDeletedPokemonNotif();
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
}
