import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreatePokemon, Pokemon } from '../models/pokemon';
import { Observable, catchError, delay, map, of } from 'rxjs';
import { NotificationsService } from './notifications.service';

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

  constructor(private httpClient: HttpClient, private notificationsService: NotificationsService) {}

  postPokemon(pokemon: CreatePokemon) {
    return this.httpClient
      .post<PostPokemonRes>(`${this.baseUrl}/pokemons.json`, pokemon)
      .pipe(
        map((postPokemonRes: PostPokemonRes) => {
          return postPokemonRes.name;
        })
      );
  }

  getPokemon(id: string) {
    return this.httpClient.get<CreatePokemon>(`${this.baseUrl}/pokemons/${id}.json`);
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
        catchError((error) => {
          this.notificationsService.showNotification(
            'Un problème est survenu',
            'danger'
          );
          return of([]);
        }),
        delay(500),
      );
  }

  deletePokemon(id: string) {
    this.httpClient.delete(`${this.baseUrl}/pokemons/${id}.json`).subscribe();
  }
}
