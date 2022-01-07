import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { 
  }
 

  getAllPokemon(){
    return axios.get("https://pokeapi.co/api/v2/pokemon")
  }

  getPokemon(index: any){
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${index}`)

  }
}
