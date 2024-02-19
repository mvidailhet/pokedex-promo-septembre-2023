import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetPokemonsResult, PokemonDetail } from '../models/api-pokemon';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokeapiService {
  baseUrl = 'https://pokeapi.co/api/v2';

  constructor(private httpClient: HttpClient) {}

  getPokemons() {
    return this.httpClient
      .get<GetPokemonsResult>(`${this.baseUrl}/pokemon`)
      .pipe(
        map((getPokemonsResult: GetPokemonsResult) => getPokemonsResult.results)
      );
  }

  getPokemon(id: number) {
    return this.httpClient.get<PokemonDetail>(`${this.baseUrl}/pokemon/${id}`);
  }

  getPokemonFromUrl(url: string) {
    return this.httpClient.get<PokemonDetail>(url);
  }
}
