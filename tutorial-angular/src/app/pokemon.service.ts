import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { 
  }
 

  getAllPokemon(){
    return axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=890")
  }

  getPokemon(index: any){
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${index}`)
  }

  async getpokemonImages(listimages: any){
    for(let i = 1; i <= 151; i++){
      await this.getPokemon(i).then(resp => {
        listimages.push(resp.data.sprites.front_default)
      })
    }   
  }

  searchPokemon(search:any){
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`)
  }
}
