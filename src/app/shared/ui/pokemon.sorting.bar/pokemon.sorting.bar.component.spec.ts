import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonSortingBarComponent } from './pokemon.sorting.bar.component';

describe('PokemonSortingBarComponent', () => {
  let component: PokemonSortingBarComponent;
  let fixture: ComponentFixture<PokemonSortingBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonSortingBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonSortingBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
