import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { PokemonApiListComponent } from './components/pokemon-api-list/pokemon-api-list.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { DetailsComponent } from './pages/pokemon/pages/details/details.component';
import { GeneralComponent } from './pages/pokemon/pages/general/general.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { UnknownPageComponent } from './pages/unknown-page/unknown-page.component';
import { PokemonDetailsComponent } from './pages/pokemon-details/pokemon-details.component';

const routes: Routes = [
  {
    path: 'mypokemons',
    component: PokemonListComponent,
  },
  {
    path: 'pokeapi',
    component: PokemonApiListComponent,
  },
  {
    path: 'pokemon-details/:id',
    component: PokemonDetailsComponent,
  },
  {
    path: 'pokemon/:id',
    component: PokemonComponent,
    children: [
      {
        path: 'general',
        component: GeneralComponent,
      },
      {
        path: 'details',
        component: DetailsComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'general',
      },
    ],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'mypokemons',
  },
  {
    path: 'unknown-page',
    component: UnknownPageComponent,
  },
  {
    path: '**',
    redirectTo: 'unknown-page',
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
