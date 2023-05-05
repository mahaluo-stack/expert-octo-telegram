import { Component } from '@angular/core';
import pokemonList from '../../../json/pokemon.json'; 
import { PokemonType } from 'src/app/core/models/interfaces';

@Component({
  selector: 'app-home.page',
  templateUrl: './home.page.component.html',
  styleUrls: ['./home.page.component.css']
})
export class HomePageComponent {

  pokemonArr: Array<PokemonType> = [];


  constructor() {
    
    pokemonList.forEach((pokemon: PokemonType) => {
      pokemon.nonEffective 
    })
  }
}
