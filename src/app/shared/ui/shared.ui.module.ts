import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonGridComponent } from './pokemon.grid/pokemon.grid.component';
import { PokemonTypeFilterComponent } from './pokemon.type.filter/pokemon.type.filter.component';
import { PokemonSearchBarComponent } from './pokemon.search.bar/pokemon.search.bar.component';
import { PokemonSortingBarComponent } from './pokemon.sorting.bar/pokemon.sorting.bar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PokemonGridComponent,
    PokemonTypeFilterComponent,
    PokemonSearchBarComponent,
    PokemonSortingBarComponent
  ],
  exports: [
    PokemonGridComponent,
    PokemonTypeFilterComponent,
    PokemonSearchBarComponent,
    PokemonSortingBarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SharedUiModule { }
