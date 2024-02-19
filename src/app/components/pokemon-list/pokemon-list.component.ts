import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent {
  newPokemonName?: string;

  constructor(
    public pokemonService: PokemonService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  onAddPokemonBtnClick() {
    if (this.newPokemonName === undefined) return;
    this.pokemonService.addPokemon(this.newPokemonName);
  }

  onPokemonDelete(index: number) {
    this.pokemonService.deletePokemon(index);
  }

  goToPokemonPage(id: string) {
    this.router.navigate(['/pokemon', id], { relativeTo: this.activatedRoute });
  }
}
