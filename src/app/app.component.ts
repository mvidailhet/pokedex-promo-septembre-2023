import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-pokedex';
  jsInputValue = '';

  addPokemon() {
    console.log(`adding pokemon ${this.jsInputValue}`);
  }

  onInputChange(event: Event) {
    const inputElt = event.target as HTMLInputElement;
    this.jsInputValue = inputElt.value;
  }

}
