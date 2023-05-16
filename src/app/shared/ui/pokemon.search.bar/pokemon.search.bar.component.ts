import { Component, inject } from '@angular/core';
import { PokemonGridService } from 'src/app/core/services/pokemon.grid.service';

@Component({
  selector: 'app-pokemon-search-bar',
  templateUrl: './pokemon.search.bar.component.html',
  styleUrls: ['./pokemon.search.bar.component.css']
})
export class PokemonSearchBarComponent {

  opened: string = 'closed';
  searchString: string = '';
  pokemonGridService: PokemonGridService = inject(PokemonGridService);

  handleToggle() { 
    if (this.opened === 'closed') { 
      this.opened = 'opened';
    }
    else if (this.opened === 'opened') {
      this.opened = 'closed';
      this.searchString = '';
      this.handleChange(); 
    }
  }

  handleChange() {
    this.pokemonGridService.searchString.next({ string: this.searchString });
  }
}
