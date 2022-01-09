import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../pokemon.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css']
})
export class ListPokemonComponent implements OnInit {

  listpokemon:any=null;
  listimages:Array<any>=[];
  search:String='';

  constructor(private pokemon_service:PokemonService,private router: Router) { 
    this.pokemon_service;
  }

  ngOnInit(): void {  
    this.pokemon_service.getAllPokemon().then(resp=>{
      this.listpokemon=resp.data.results;
   })
  }
  pokemonInfo(index:number){
    this.router.navigateByUrl('pokemon/'+index);
  }
  searchPokemon(search:any){
    console.log(search)
    if (search == ''){
      this.pokemon_service.getAllPokemon().then(resp=>{
        this.listpokemon=resp.data.results;
     })
    } else {
      this.pokemon_service.searchPokemon(search).then(resp => {
        this.listpokemon = resp.data;
        console.log(this.listpokemon.name)
      })
    }
    
  }
}
