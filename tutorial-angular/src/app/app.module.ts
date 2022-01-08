import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPokemonComponent } from './pokedex/list-pokemon/list-pokemon.component';

import { PokemonComponent } from './pokedex/pokemon/pokemon.component';
import { PokedexModule } from './pokedex/pokedex.module';



@NgModule({
  declarations: [
    AppComponent,

    ListPokemonComponent,

    PokemonComponent,

  ],
  imports: [
    BrowserModule,
    PokedexModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
