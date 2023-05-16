import { Enums } from ".."

export interface PokemonType {
    [key: string]: {
        colour: Enums.PokemonTypeColour | any;
        iconPath: Enums.PokemonTypeIcon | any;
        name: Enums.PokemonTypeName | any;
        superEffective: { [key: string]: Enums.DamageMultipliers; } | any;
        resists: { [key: string]: Enums.DamageMultipliers; } | any;
        nonEffective: { [key: string]: Enums.DamageMultipliers; } | any;
        weakness: { [key: string]: Enums.DamageMultipliers; } | any;
    }
}