import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-mouse-pokemon',
  templateUrl: './mouse-pokemon.component.html',
  styleUrls: ['./mouse-pokemon.component.scss']
})
export class MousePokemonComponent {
  pikachuImages = {
    front: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    back: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png',
  }

  mousePokemonData = {
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    position: {
      left: '0px',
      top: '0px',
    }
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mousePokemonData.position = {
      left: `${event.clientX + 10 }px`,
      top: `${event.clientY + 10 }px`
    }
  }

  @HostListener('document:mousedown', ['$event'])
  onMouseDown() {
    this.mousePokemonData.image = this.pikachuImages.back;
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp() {
    this.mousePokemonData.image = this.pikachuImages.front;
  }
}
