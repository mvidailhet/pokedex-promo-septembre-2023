import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';

export interface GetPokemonsRes {
  [id: string]: Pokemon;
};

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl =
    'https://pokedex-promo-septembre-2023-default-rtdb.europe-west1.firebasedatabase.app';

  constructor(private httpClient: HttpClient) {}

  postPokemon(pokemon: Pokemon) {
    this.httpClient
      .post(`${this.baseUrl}/pokemons.json`, pokemon)
      .subscribe((res) => {
        console.log(res);
      });
  }

  getPokemons() {
    return this.httpClient.get<GetPokemonsRes>(`${this.baseUrl}/pokemons.json`);
  }
}
