import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetPokemonsResult, PokemonDetail } from '../models/api-pokemon';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokeapiService {
  baseUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private httpClient: HttpClient) {}

  getPokemons() {
    return this.httpClient
      .get<GetPokemonsResult>(`${this.baseUrl}`)
      .pipe(
        map((getPokemonsResult: GetPokemonsResult) => getPokemonsResult.results)
      );
  }

  getPokemonFromUrl(url: string) {
    return this.httpClient.get<PokemonDetail>(url);
  }

  getPokemon(id: number) {
    return this.httpClient.get<PokemonDetail>(`${this.baseUrl}/${id}`);
  }
}
