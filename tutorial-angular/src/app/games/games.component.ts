import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import axios from 'axios'
import { PokemonService } from '../pokemon.service';
@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
  providers:[PokemonService]

})
export class GamesComponent implements OnInit {

  pokemon:String="Hola"

  constructor(private pokemon_service:PokemonService) { 
    this.pokemon_service

  }

  ngOnInit(): void {
    this.pokemon_service.getPokemon().then(resp=>this.pokemon=resp.data.name)

 
    
  }

}
