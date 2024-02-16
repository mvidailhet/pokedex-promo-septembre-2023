import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetPokemonsResult, PokemonDetail } from '../models/api-pokemon';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokeapiService {
  constructor(private httpClient: HttpClient) {}

  getPokemons() {
    return this.httpClient
      .get<GetPokemonsResult>('https://pokeapi.co/api/v2/pokemon')
      .pipe(
        map((getPokemonsResult: GetPokemonsResult) => getPokemonsResult.results)
      );
  }

  getPokemonFromUrl(url: string) {
    return this.httpClient.get<PokemonDetail>(url);
  }
}
