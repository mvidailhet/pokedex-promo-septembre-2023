import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-pokedex';
  newPokemonName?: string;
  isPokemonAdded = false;

  pokemons: string[] = [];

  addPokemon() {
    if (this.newPokemonName === undefined) return;
    this.pokemons.push(this.newPokemonName);
    this.showAddedPokemonNotif();
  }

  showAddedPokemonNotif() {
    this.isPokemonAdded = true;
    setTimeout(() => {
      this.isPokemonAdded = false;
    }, 3000);
  }

}
