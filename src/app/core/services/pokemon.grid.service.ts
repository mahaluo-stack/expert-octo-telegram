import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import pokemonJSON from '../../../assets/json/pokemon.json';
import { Pokemon, PokemonType, TypeFilter } from '../models/interfaces';
import { TYPES } from '../models/constants';

@Injectable()
export class PokemonGridService {

  pristinePokemonList: Array<Pokemon> = pokemonJSON.filter((pokemon: Pokemon) => !pokemon.name.includes("shadow"));
  pokemonArr: BehaviorSubject<{ arr: Array<Pokemon> }>;
  typeFilters: BehaviorSubject<{ arr: Array<string> }>;
  searchString: BehaviorSubject<{ string: string }>;

  constructor() {
    this.pristinePokemonList.forEach((pokemon: Pokemon) => {
      let wholePokemonType: Array<PokemonType> = [];
      pokemon.types.forEach((type) => {
        wholePokemonType.push(TYPES[type]);
      });
      pokemon.wholeType = wholePokemonType;
    });
    let arr: Array<string> = [];

    this.pokemonArr = new BehaviorSubject({ arr: this.pristinePokemonList });
    this.typeFilters = new BehaviorSubject({ arr: arr });
    this.searchString = new BehaviorSubject({ string: '' });
    this.typeFilters.subscribe((): void => { this.filterList(); });
    this.searchString.subscribe((): void => { this.filterList(); });
  }

  getPokemonList(): Array<Pokemon> { return this.pokemonArr.value.arr; }

  filterList() {
    let res: Array<Pokemon> = [];
    
    if (this.typeFilters.value.arr.length === 0 && this.searchString.value.string.length === 0) {
      this.pokemonArr.next({ arr: this.pristinePokemonList });
      return;
    }
    if (this.typeFilters.value.arr.length === 0 && this.searchString.value.string.length !== 0) {
      res = this.pristinePokemonList.filter((pokemon: Pokemon) => { return pokemon.name.toLowerCase().includes(this.searchString.value.string.toLowerCase()) });
    }
    if (this.typeFilters.value.arr.length !== 0 && this.searchString.value.string.length === 0) {
      res = this.pristinePokemonList.filter((pokemon: Pokemon) => pokemon.types.every((type: string) => this.typeFilters.value.arr.includes(type)));
    }
    if (this.typeFilters.value.arr.length !== 0 && this.searchString.value.string.length !== 0) {
      res = this.pristinePokemonList.filter((pokemon: Pokemon) => pokemon.types.every((type: string) => this.typeFilters.value.arr.includes(type)));
      res = res.filter((pokemon: Pokemon) => { return pokemon.name.toLowerCase().includes(this.searchString.value.string.toLowerCase()) });
    }

    this.pokemonArr.next({ arr: res });
  }
}
