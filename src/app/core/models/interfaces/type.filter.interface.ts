import { Enums } from "..";

export interface TypeFilter { 
    iconPath: Enums.PokemonTypeIcon | any; 
    name: Enums.PokemonTypeName | any;
    id: string;
}