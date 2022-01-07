import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { 
  }
 
  getPokemon(){
    return axios.get("https://pokeapi.co/api/v2/pokemon/1")
  }
}
