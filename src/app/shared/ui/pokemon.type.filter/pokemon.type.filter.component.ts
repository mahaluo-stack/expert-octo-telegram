import { Component, inject } from '@angular/core';
import { TYPES } from 'src/app/core/models/constants';
import { PokemonType, TypeFilter } from 'src/app/core/models/interfaces';
import { PokemonGridService } from 'src/app/core/services/pokemon.grid.service';

@Component({
  selector: 'app-pokemon-type-filter',
  templateUrl: './pokemon.type.filter.component.html',
  styleUrls: ['./pokemon.type.filter.component.css']
})
export class PokemonTypeFilterComponent {

  opened: string = 'closed';
  typeList: Object = TYPES;
  typeArr: Array<TypeFilter> = [];
  pokemonGridService: PokemonGridService = inject(PokemonGridService);

  constructor() {
    Object.values(this.typeList).forEach((type: PokemonType) => {
      this.typeArr.push({ iconPath: type['iconPath'], id: 'inactive', name: type['name'] });
    });
  }

  handleToggle() {
    this.opened = this.opened === 'opened' ? this.opened = 'closed' : this.opened = 'opened'; 
  }

  handleChange(clickedIndex: number): void {
    this.typeArr.forEach((type, index) => {
      if (type.id === 'inactive' && clickedIndex === index) { type.id = 'active'; }
      else if (type.id === 'active' && clickedIndex === index) { type.id = 'inactive' }
    });
    this.pokemonGridService.typeFilters.next({ arr: this.typeArr.filter(type => type.id === 'active').map(type => type.name) });
  }
}