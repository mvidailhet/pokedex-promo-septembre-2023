import { Component } from '@angular/core';
import { GetPokemonsResult } from 'src/app/models/api-pokemon';
import { PokeapiService } from 'src/app/services/pokeapi.service';

@Component({
  selector: 'app-pokemon-api-list',
  templateUrl: './pokemon-api-list.component.html',
  styleUrls: ['./pokemon-api-list.component.scss']
})
export class PokemonApiListComponent {

  constructor(private pokeapiService: PokeapiService) {
    this.pokeapiService.getPokemons()
    .subscribe((res: GetPokemonsResult) => {
      res.results.forEach((pokemon) => {
        console.log(pokemon.name);
      });
    });
  }
}
