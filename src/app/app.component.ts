import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-pokedex';
  newPokemonName = '';
  isPokemonAdded = false;

  addPokemon() {
    console.log(`adding pokemon ${this.newPokemonName}`);
    this.showAddedPokemonNotif();
  }

  showAddedPokemonNotif() {
    this.isPokemonAdded = true;
    setTimeout(() => {
      this.isPokemonAdded = false;
    }, 3000);
  }

  onInputChange(event: Event) {
    const inputElt = event.target as HTMLInputElement;
    this.newPokemonName = inputElt.value;
  }

}
