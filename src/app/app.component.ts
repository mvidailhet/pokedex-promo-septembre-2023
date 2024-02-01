import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-pokedex';
  userInput = 'coucou';

  addPokemon() {
    console.log(`adding pokemon ${this.userInput}`);
  }

}
