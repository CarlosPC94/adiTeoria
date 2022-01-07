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
  getPokemonImagen(listpokemon:any[]){
    for(let i=1 ;i<=5;i)
    {
      this.getPokemon(i).then(resp => {
        listpokemon.push(resp.data.sprites.front_default)
      })
    }
    return listpokemon;
  }

  getPokemon(index: any){
    return axios.get(`https://pokeapi.co/api/v2/pokemon/1${index}`)

  }
}
