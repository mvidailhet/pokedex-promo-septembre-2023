import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PokemonDetail } from 'src/app/models/api-pokemon';
import { PokeapiService } from 'src/app/services/pokeapi.service';

const frenchPokemonTypes: Record<string, string> = {
  normal: 'normal',
  fighting: 'combat',
  flying: 'vol',
  poison: 'poison',
  ground: 'sol',
  rock: 'roche',
  bug: 'insecte',
  ghost: 'spectre',
  steel: 'acier',
  fire: 'feu',
  water: 'eau',
  grass: 'plante',
  electric: 'électrique',
  psychic: 'psy',
  ice: 'glace',
  dragon: 'dragon',
  dark: 'ténèbres',
  fairy: 'fée',
  unknown: 'inconnu',
  shadow: 'ombre',
};

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss'],
})
export class PokemonDetailsComponent {
  pokemon?: PokemonDetail;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokeapiService: PokeapiService
  ) {
    this.subscribeToPageParams();
  }

  subscribeToPageParams() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const idStr = paramMap.get('id');
      if (!idStr) return;
      const id = parseInt(idStr);
      this.pokeapiService.getPokemon(id).subscribe((pokemon: PokemonDetail) => {
        this.pokemon = pokemon;
      });
    });
  }

  getPokemonImage(id: number) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  }

  getFrenchTypeName(typeName: string) {
    return frenchPokemonTypes[typeName];
  }

  getPokemonTypeImage(typeName: string) {
    return `https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/types/${this.getFrenchTypeName(
      typeName
    )}.png`;
  }
}
