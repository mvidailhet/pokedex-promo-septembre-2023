import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CreatePokemon } from 'src/app/models/pokemon';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent {
  id?: string;
  pokemon?: CreatePokemon;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      if (!id) return;
      this.apiService.getPokemon(id).subscribe((pokemon: CreatePokemon) => {
        this.pokemon = pokemon;
      });
    });

  }
}
