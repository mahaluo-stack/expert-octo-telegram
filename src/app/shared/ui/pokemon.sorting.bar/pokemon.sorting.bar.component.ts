import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon-sorting-bar',
  templateUrl: './pokemon.sorting.bar.component.html',
  styleUrls: ['./pokemon.sorting.bar.component.css']
})
export class PokemonSortingBarComponent {

  sortOptions: Array<string> = ['cp', 'dps', 'name'];
  opened: string = 'closed';
  active: string = 'inactive';

  handleToggle() {
    this.active = this.active === 'active' ? this.active = 'inactive' : this.active = 'active';
    this.opened = this.opened === 'opened' ? this.opened = 'closed' : this.opened = 'opened';
  }

  handleChange() {

  }
}
