import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NavigationItem } from 'src/app/models/navigation';
import { CreatePokemon } from 'src/app/models/pokemon';
import { ApiService } from 'src/app/services/api.service';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent {
  id?: string;
  pokemon?: CreatePokemon;

  nextPokemonId: string | null = null;

  navigation: NavigationItem[] = [
    {
      routerLink: 'general',
      title: 'Général'
    },
    {
      routerLink: 'details',
      title: "Détails"
    }
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService,
    private pokemonService: PokemonService,
  ) {
    this.subscribeToPageParams();
  }

  subscribeToPageParams() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      if (!id) return;
      this.apiService.getPokemon(id).subscribe((pokemon: CreatePokemon) => {
        this.pokemon = pokemon;
      });
      this.nextPokemonId = this.pokemonService.getNextPokemonId(id);
    });
  }
}
