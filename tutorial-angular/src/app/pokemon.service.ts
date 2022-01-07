import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { 
  }
 
  getPokemon(index: any){
    return axios.get(`https://pokeapi.co/api/v2/pokemon/1${index}`)
  }
}
