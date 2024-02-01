import { Component } from "@angular/core";

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss'],
})
export class PokemonItemComponent {
  name = 'Bulbizarre';
  level = Math.round(Math.random() * 10);
}
