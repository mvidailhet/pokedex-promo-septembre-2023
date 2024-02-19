import { Component } from '@angular/core';

export interface NavigationItem {
  routerLink: string;
  title: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  navigation: NavigationItem[] = [
    {
      routerLink: '/mypokemons',
      title: 'Mes pokémons'
    },
    {
      routerLink: '/pokeapi',
      title: "Pokémons de l'API"
    }
  ];
}
