import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.id = id;
      this.apiService.getPokemon(id).subscribe((pokemon: CreatePokemon) => {
        this.pokemon = pokemon;
      });
    }
  }
}
