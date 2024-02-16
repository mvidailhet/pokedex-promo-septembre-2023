import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreatePokemon, Pokemon } from '../models/pokemon';
import { Observable, delay, map } from 'rxjs';

export interface GetPokemonsRes {
  [id: string]: Pokemon;
}

export interface PostPokemonRes {
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl =
    'https://pokedex-promo-septembre-2023-default-rtdb.europe-west1.firebasedatabase.app';

  constructor(private httpClient: HttpClient) {}

  postPokemon(pokemon: CreatePokemon) {
    return this.httpClient
      .post<PostPokemonRes>(`${this.baseUrl}/pokemons.json`, pokemon)
      .pipe(
        map((postPokemonRes: PostPokemonRes) => {
          return postPokemonRes.name;
        })
      );
  }

  getPokemons(): Observable<Pokemon[]> {
    return this.httpClient
      .get<GetPokemonsRes>(`${this.baseUrl}/pokemons.json`)
      .pipe(
        map((getPokemonRes: GetPokemonsRes) => {
          const ids = Object.keys(getPokemonRes);
          return ids.map((id: string) => {
            const pokemon: CreatePokemon = getPokemonRes[id];
            return { ...pokemon, id };
          });
        }),
        delay(3000),
      );
  }

  deletePokemon(id: string) {
    this.httpClient.delete(`${this.baseUrl}/pokemons/${id}.json`).subscribe();
  }
}
