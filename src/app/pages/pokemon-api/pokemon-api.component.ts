import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PokemonDetail } from 'src/app/models/api-pokemon';
import { NavigationItem } from 'src/app/models/navigation';
import { PokeapiService } from 'src/app/services/pokeapi.service';

@Component({
  selector: 'app-pokemon-api',
  templateUrl: './pokemon-api.component.html',
  styleUrls: ['./pokemon-api.component.scss'],
})
export class PokemonApiComponent {
  pokemon?: PokemonDetail;

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
    private pokeapiService: PokeapiService
  ) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const idStr = paramMap.get('id');
      if (!idStr) {
        throw new Error('No id found in route');
      }

      const id = parseInt(idStr);
      this.pokeapiService.getPokemon(id).subscribe((pokemon) => {
        this.pokemon = pokemon;
      });
    });
  }
}
