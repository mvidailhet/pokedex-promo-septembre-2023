import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { PokemonApiListComponent } from './components/pokemon-api-list/pokemon-api-list.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { DetailsComponent } from './pages/pokemon/pages/details/details.component';
import { GeneralComponent } from './pages/pokemon/pages/general/general.component';
import { GeneralComponent as PokeApiGeneralComponent } from './pages/pokemon-api/pages/general/general.component';
import { DetailsComponent as PokeApiDetailsComponent } from './pages/pokemon-api/pages/details/details.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { UnknownPageComponent } from './pages/unknown-page/unknown-page.component';
import { PokemonApiComponent } from './pages/pokemon-api/pokemon-api.component';

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
    path: 'pokemon-api/:id',
    component: PokemonApiComponent,
    children: [
      {
        path: 'general',
        component: PokeApiGeneralComponent,
      },
      {
        path: 'details',
        component: PokeApiDetailsComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'general',
      }
    ],
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
/*   {
    path: '**',
    redirectTo: 'unknown-page',
  }, */
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
