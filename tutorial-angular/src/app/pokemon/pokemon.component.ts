import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
  providers: [PokemonService]
})
export class PokemonComponent implements OnInit {

  pokemon: any = null;
  constructor(private pokemonService:PokemonService,private route:ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.pokemonService.getPokemon(this.route.snapshot.paramMap.get('id')).then(resp => {
      this.pokemon = resp.data;
      console.log(this.route.snapshot.paramMap.get('id'))
    })
  
  }
  pokemonList(){
    this.router.navigateByUrl('/');
  }
}
