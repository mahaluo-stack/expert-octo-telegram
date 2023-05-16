import { Component, inject, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/core/models/interfaces';

import { PokemonGridService } from 'src/app/core/services/pokemon.grid.service';

@Component({
  selector: 'app-pokemon-grid',
  templateUrl: './pokemon.grid.component.html',
  styleUrls: ['./pokemon.grid.component.css']
})
export class PokemonGridComponent implements OnInit {

  pokemonGridService: PokemonGridService = inject(PokemonGridService);
  pokemonArr: Array<Pokemon> = [];

  constructor() {}

  ngOnInit(): void {
    this.pokemonGridService.pokemonArr.subscribe(() => { 
      this.pokemonArr = this.pokemonGridService.pokemonArr.value.arr;
    });
  }
}
