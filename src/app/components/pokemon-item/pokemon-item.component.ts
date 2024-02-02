import { Component } from "@angular/core";

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss'],
})
export class PokemonItemComponent {
  name = 'Bulbizarre';
  level = Math.round(Math.random() * 10);
  genders = ['male', 'female'];
  gender = this.getRandomIndexInArray(this.genders);

  getRandomIndexInArray(array: string[]) {
    return array[Math.floor(Math.random() * array.length)];
  }

  getType() {
    return this.level < 5 ? 'GRASS' : 'FIRE';
  }
}
