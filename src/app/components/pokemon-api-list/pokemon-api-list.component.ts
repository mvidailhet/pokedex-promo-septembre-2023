import { Component } from '@angular/core';
import {
  GetPokemonsResult,
  PokemonDetail,
  SimplePokemon,
} from 'src/app/models/api-pokemon';
import { PokeapiService } from 'src/app/services/pokeapi.service';

@Component({
  selector: 'app-pokemon-api-list',
  templateUrl: './pokemon-api-list.component.html',
  styleUrls: ['./pokemon-api-list.component.scss'],
})
export class PokemonApiListComponent {
  pokemons: PokemonDetail[] = [];

  constructor(private pokeapiService: PokeapiService) {
    this.pokeapiService.getPokemons()
    .subscribe((pokemons: SimplePokemon[]) => {
      pokemons.forEach((pokemon) => {
        this.pokeapiService
          .getPokemonFromUrl(pokemon.url)
          .subscribe((pokemonDetail: PokemonDetail) => {
            this.pokemons.push(pokemonDetail);
            console.log(pokemonDetail);
          });
      });
    });
  }
}
