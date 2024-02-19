import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { PokemonItemComponent } from './components/pokemon-item/pokemon-item.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { MyPokemonComponent } from './components/my-pokemon/my-pokemon.component';
import { MousePokemonComponent } from './components/mouse-pokemon/mouse-pokemon.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { PokemonApiListComponent } from './components/pokemon-api-list/pokemon-api-list.component';
import { RouterModule, Routes } from '@angular/router';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { GeneralComponent } from './pages/pokemon/pages/general/general.component';
import { DetailsComponent } from './pages/pokemon/pages/details/details.component';
import { UnknownPageComponent } from './pages/unknown-page/unknown-page.component';

const routes: Routes = [
  {
    path: 'mypokemons',
    component: PokemonListComponent,
  },
  {
    path: 'pokeapi',
    component: PokemonApiListComponent
  },
  {
    path: 'pokemon/:id',
    component: PokemonComponent,
    children: [
      {
        path: 'general',
        component: GeneralComponent
      },
      {
        path: 'details',
        component: DetailsComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'general'
      }
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
    redirectTo: 'unknown-page'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PokemonItemComponent,
    PokemonListComponent,
    MyPokemonComponent,
    MousePokemonComponent,
    NotificationsComponent,
    PokemonApiListComponent,
    PokemonComponent,
    GeneralComponent,
    DetailsComponent,
    UnknownPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
