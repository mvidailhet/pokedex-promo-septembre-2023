import { Component } from '@angular/core';
import { GetPokemonsResult, SimplePokemon } from 'src/app/models/api-pokemon';
import { PokeapiService } from 'src/app/services/pokeapi.service';

@Component({
  selector: 'app-pokemon-api-list',
  templateUrl: './pokemon-api-list.component.html',
  styleUrls: ['./pokemon-api-list.component.scss']
})
export class PokemonApiListComponent {
  pokemons?: SimplePokemon[];

  constructor(private pokeapiService: PokeapiService) {
    this.pokeapiService.getPokemons()
    .subscribe((pokemons: SimplePokemon[]) => {
      this.pokemons = pokemons;
      console.log(pokemons);
    });
  }
}
