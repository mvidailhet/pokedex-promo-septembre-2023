import { Component } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent {
  newPokemonName?: string;

  pokemons: Pokemon[] = this.pokemonService.pokemons;

  constructor(
    private pokemonService: PokemonService
  ) {}

  onAddPokemonBtnClick() {
    if (this.newPokemonName === undefined) return;
    this.pokemonService.addPokemon(this.newPokemonName);
  }

  onPokemonDelete(index: number) {
    this.pokemonService.deletePokemon(index);
  }
}
