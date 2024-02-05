import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-pokemon',
  templateUrl: './my-pokemon.component.html',
  styleUrls: ['./my-pokemon.component.scss']
})
export class MyPokemonComponent {
  types = ['FEU', 'EAU', 'PLANTE'];
  type = this.getRandomIndexInArray(this.types);

  @Input() name?: string;
  @Input() gender?: string;

  @Output() delete = new EventEmitter();

  isBtnDisabled = false;

  getRandomIndexInArray(array: string[]) {
    return array[Math.floor(Math.random() * array.length)];
  }

  deletePokemon() {
    this.delete.emit();
  }
}
