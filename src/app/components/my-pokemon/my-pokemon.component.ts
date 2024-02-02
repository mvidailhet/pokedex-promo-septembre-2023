import { Component } from '@angular/core';

@Component({
  selector: 'app-my-pokemon',
  templateUrl: './my-pokemon.component.html',
  styleUrls: ['./my-pokemon.component.scss']
})
export class MyPokemonComponent {
  types = ['FEU', 'EAU', 'PLANTE'];
  names = ['Bulbizarre', 'Dracofeu', 'Carapuce'];
  type = this.getRandomIndexInArray(this.types);
  name = this.getRandomIndexInArray(this.names);
  isBtnDisabled = false;

  changeName() {
    this.name = this.getRandomIndexInArray(this.names);
    this.isBtnDisabled = true;
  }

  getRandomIndexInArray(array: string[]) {
    return array[Math.floor(Math.random() * array.length)];
  }
}
