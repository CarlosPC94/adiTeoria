import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonComponent } from './pokemon/pokemon.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
const routes: Routes = [
  {
    path:'',
    component:ListPokemonComponent
  },
  {
    path:'pokemon/:id',
    component:PokemonComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
