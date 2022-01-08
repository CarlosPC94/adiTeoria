import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../pokemon.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css']
})
export class ListPokemonComponent implements OnInit {

  listpokemon:Array<any>=[];
  listimages:Array<any>=[];

  constructor(private pokemon_service:PokemonService,private router: Router) { 
    this.pokemon_service
  }

  ngOnInit(): void {  
    this.pokemon_service.getAllPokemon().then(resp=>{
      this.listpokemon=resp.data.results;
   })
   this.pokemon_service.getpokemonImages(this.listimages)
  }
  pokemonInfo(index:number){
    this.router.navigateByUrl('pokemon/'+index);
  }
}
