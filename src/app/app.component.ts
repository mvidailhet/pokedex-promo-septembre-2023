import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-pokedex';
  ngModelInputValue = 'coucou';

  jsInputValue = '';

  addPokemon() {
    console.log(`adding pokemon ${this.ngModelInputValue}`);
  }

  onInputChange(event: Event) {
    const inputElt = event.target as HTMLInputElement;
    this.jsInputValue = inputElt.value;
  }

}
