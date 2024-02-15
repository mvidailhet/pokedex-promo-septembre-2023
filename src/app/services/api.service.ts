import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  postPokemon(pokemon: Pokemon) {
    this.httpClient.post(
      'https://pokedex-promo-septembre-2023-default-rtdb.europe-west1.firebasedatabase.app/pokemons.json',
      pokemon
    ).subscribe();
  }
}
