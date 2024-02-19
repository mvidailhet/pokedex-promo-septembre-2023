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
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { GeneralComponent } from './pages/pokemon/pages/general/general.component';
import { DetailsComponent } from './pages/pokemon/pages/details/details.component';
import { UnknownPageComponent } from './pages/unknown-page/unknown-page.component';
import { AppRoutingModule } from './app-routing.module';
import { PokemonApiComponent } from './pages/pokemon-api/pokemon-api.component';

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
    PokemonApiComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
