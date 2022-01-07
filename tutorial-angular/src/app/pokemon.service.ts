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
    var listimages:Array<any>=[];
    for(let i=1 ;i<=5;i)
    {
      axios.get("https://pokeapi.co/api/v2/pokemon/"+i).then(resp=>{

        listimages.push(resp.data.sprites.front_default)
      })
    }
    return  listimages;
  }
}
