import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetPokemonsResult } from '../models/api-pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  constructor(private httpClient: HttpClient) { }

  getPokemons() {
    return this.httpClient.get<GetPokemonsResult>('https://pokeapi.co/api/v2/pokemon');
  }
}
