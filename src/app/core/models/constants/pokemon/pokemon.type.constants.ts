import { Interfaces, Enums } from "../../";

export const type: Interfaces.PokemonType = {
    bug: {
        colour: Enums.PokemonTypeColour.BUG,
        name: Enums.PokemonTypeName.BUG,
        superEffective: {
            grass: Enums.DamageMultipliers.SUPER_EFFECTIVE,
            dark: Enums.DamageMultipliers.SUPER_EFFECTIVE,
            psychic: Enums.DamageMultipliers.SUPER_EFFECTIVE
        },
        resists: {
            fighting: Enums.DamageMultipliers.RESISTANT,
            grass: Enums.DamageMultipliers.RESISTANT,
            ground: Enums.DamageMultipliers.RESISTANT
        },
        nonEffective: {
            fighting: Enums.DamageMultipliers.RESISTANT,
            fire: Enums.DamageMultipliers.RESISTANT,
            flying: Enums.DamageMultipliers.RESISTANT,
            fairy: Enums.DamageMultipliers.RESISTANT,
            ghost: Enums.DamageMultipliers.RESISTANT,
            poison: Enums.DamageMultipliers.RESISTANT,
            steel: Enums.DamageMultipliers.RESISTANT
        },
        weakness: {
            fire: Enums.DamageMultipliers.SUPER_EFFECTIVE,
            flying: Enums.DamageMultipliers.SUPER_EFFECTIVE,
            rock: Enums.DamageMultipliers.SUPER_EFFECTIVE,
        },
    },
    dark: {
        colour: Enums.PokemonTypeColour.DARK,
        name: Enums.PokemonTypeName.DARK,
        superEffective: {
            ghost: Enums.DamageMultipliers.SUPER_EFFECTIVE,
            psychic: Enums.DamageMultipliers.SUPER_EFFECTIVE,
        },
        resists: {
            dark: Enums.DamageMultipliers.RESISTANT,
            ghost: Enums.DamageMultipliers.RESISTANT,
            psychic: Enums.DamageMultipliers.NON_EFFECTIVE,
        },
        nonEffective: {
            dark: Enums.DamageMultipliers.RESISTANT,
            fighting: Enums.DamageMultipliers.RESISTANT,
            fairy: Enums.DamageMultipliers.RESISTANT,
        },
        weakness: {
            bug: Enums.DamageMultipliers.SUPER_EFFECTIVE,
            fighting: Enums.DamageMultipliers.SUPER_EFFECTIVE,
            fairy: Enums.DamageMultipliers.SUPER_EFFECTIVE,
        },
    },
    dragon: {
        colour: Enums.PokemonTypeColour.DRAGON,
        name: Enums.PokemonTypeName.DRAGON,
        superEffective: {
            dragon: Enums.DamageMultipliers.SUPER_EFFECTIVE,
        },
        resists: {
            electric: Enums.DamageMultipliers.RESISTANT,
            fire: Enums.DamageMultipliers.RESISTANT,
            grass: Enums.DamageMultipliers.RESISTANT,
            water: Enums.DamageMultipliers.RESISTANT,
        },
        nonEffective: {
            steel: Enums.DamageMultipliers.RESISTANT,
            fairy: Enums.DamageMultipliers.NON_EFFECTIVE,
        },
        weakness: {
            dragon: Enums.DamageMultipliers.SUPER_EFFECTIVE,
            fairy: Enums.DamageMultipliers.SUPER_EFFECTIVE,
            ice: Enums.DamageMultipliers.SUPER_EFFECTIVE,
        },
    },
    electric: {
        colour: Enums.PokemonTypeColour.ELECTRIC,
        name: Enums.PokemonTypeName.ELECTRIC,
        superEffective: {
            flying: Enums.DamageMultipliers.SUPER_EFFECTIVE,
            water: Enums.DamageMultipliers.SUPER_EFFECTIVE,
        },
        resists: {
            electric: Enums.DamageMultipliers.RESISTANT,
            flying: Enums.DamageMultipliers.RESISTANT,
            steel: Enums.DamageMultipliers.RESISTANT,
        },
        nonEffective: {
            dragon: Enums.DamageMultipliers.RESISTANT,
            electric: Enums.DamageMultipliers.RESISTANT,
            grass: Enums.DamageMultipliers.RESISTANT,
            ground: Enums.DamageMultipliers.NON_EFFECTIVE,
        },
        weakness: {
            ground: Enums.DamageMultipliers.SUPER_EFFECTIVE,
        },
    },
    fairy: {
        colour: Enums.PokemonTypeColour.FAIRY,
        name: Enums.PokemonTypeName.FAIRY,
        superEffective: {
            dark: Enums.DamageMultipliers.SUPER_EFFECTIVE,
            dragon: Enums.DamageMultipliers.SUPER_EFFECTIVE,
            fighting: Enums.DamageMultipliers.SUPER_EFFECTIVE,
        },
        resists: {
            bug: Enums.DamageMultipliers.RESISTANT,
            dark: Enums.DamageMultipliers.RESISTANT,
            fighting: Enums.DamageMultipliers.RESISTANT,
            dragon: Enums.DamageMultipliers.NON_EFFECTIVE,
        },
        nonEffective: {
            fire: Enums.DamageMultipliers.RESISTANT,
            poison: Enums.DamageMultipliers.RESISTANT,
            steel: Enums.DamageMultipliers.RESISTANT,
        },
        weakness: {
            poison: Enums.DamageMultipliers.SUPER_EFFECTIVE,
            steel: Enums.DamageMultipliers.SUPER_EFFECTIVE,
        },
    },
    fighting: {
        colour: Enums.PokemonTypeColour.FIGHTING,
        name: Enums.PokemonTypeName.FIGHTING,
        superEffective: {
            dark: Enums.DamageMultipliers.SUPER_EFFECTIVE,
            ice: Enums.DamageMultipliers.SUPER_EFFECTIVE,
            normal: Enums.DamageMultipliers.SUPER_EFFECTIVE,
            rock: Enums.DamageMultipliers.SUPER_EFFECTIVE,
            steel: Enums.DamageMultipliers.SUPER_EFFECTIVE,
        },
        resists: {
            bug: Enums.DamageMultipliers.RESISTANT,
            dark: Enums.DamageMultipliers.RESISTANT,
            rock: Enums.DamageMultipliers.RESISTANT,
        },
        nonEffective: {
            bug: Enums.DamageMultipliers.RESISTANT,
            fairy: Enums.DamageMultipliers.RESISTANT,
            flying: Enums.DamageMultipliers.RESISTANT,
            poison: Enums.DamageMultipliers.RESISTANT,
            psychic: Enums.DamageMultipliers.RESISTANT,
            ghost: Enums.DamageMultipliers.NON_EFFECTIVE,
        },
        weakness: {
            fairy: Enums.DamageMultipliers.SUPER_EFFECTIVE,
            flying: Enums.DamageMultipliers.SUPER_EFFECTIVE,
            psychic: Enums.DamageMultipliers.SUPER_EFFECTIVE,
        },
    },
    fire: {
        colour: Enums.PokemonTypeColour.FIRE,
        name: Enums.PokemonTypeName.FIRE,
        superEffective: {
            bug: Enums.DamageMultipliers.SUPER_EFFECTIVE,
            grass: Enums.DamageMultipliers.SUPER_EFFECTIVE,
            ice: Enums.DamageMultipliers.SUPER_EFFECTIVE,
            steel: Enums.DamageMultipliers.SUPER_EFFECTIVE
        },
        resists: {
            bug: Enums.DamageMultipliers.RESISTANT,
            fire: Enums.DamageMultipliers.RESISTANT,
            fairy: Enums.DamageMultipliers.RESISTANT,
            grass: Enums.DamageMultipliers.RESISTANT,
            ice: Enums.DamageMultipliers.RESISTANT,
            steel: Enums.DamageMultipliers.RESISTANT,
        },
        nonEffective: {
            dragon: Enums.DamageMultipliers.RESISTANT,
            fire: Enums.DamageMultipliers.RESISTANT,
            rock: Enums.DamageMultipliers.RESISTANT,
            water: Enums.DamageMultipliers.RESISTANT,
        },
        weakness: {
            ground: Enums.DamageMultipliers.SUPER_EFFECTIVE,
            rock: Enums.DamageMultipliers.SUPER_EFFECTIVE,
            water: Enums.DamageMultipliers.SUPER_EFFECTIVE,
        },
    },
    flying: {
        colour: Enums.PokemonTypeColour.FLYING,
        name: Enums.PokemonTypeName.FLYING,
        superEffective: {
            bug: Enums.DamageMultipliers.SUPER_EFFECTIVE,
            fighting: Enums.DamageMultipliers.SUPER_EFFECTIVE,
            grass: Enums.DamageMultipliers.SUPER_EFFECTIVE,
        },
        resists: {
            bug: Enums.DamageMultipliers.RESISTANT,
            fighting: Enums.DamageMultipliers.RESISTANT,
            grass: Enums.DamageMultipliers.RESISTANT,
            ground: Enums.DamageMultipliers.NON_EFFECTIVE,
        },
        nonEffective: {
            electric: Enums.DamageMultipliers.RESISTANT,
            rock: Enums.DamageMultipliers.RESISTANT,
            steel: Enums.DamageMultipliers.RESISTANT,
        },
        weakness: {
            electric: Enums.DamageMultipliers.SUPER_EFFECTIVE,
            ice: Enums.DamageMultipliers.SUPER_EFFECTIVE,
            rock: Enums.DamageMultipliers.SUPER_EFFECTIVE,
        },
    },
    ghost: {
        colour: Enums.PokemonTypeColour.GHOST,
        name: Enums.PokemonTypeName.GHOST,
        superEffective: {
            ghost: Enums.DamageMultipliers.SUPER_EFFECTIVE,
            psychic: Enums.DamageMultipliers.SUPER_EFFECTIVE,
        },
        resists: {
            bug: Enums.DamageMultipliers.RESISTANT,
            poison: Enums.DamageMultipliers.RESISTANT,
            fighting: Enums.DamageMultipliers.NON_EFFECTIVE,
            normal: Enums.DamageMultipliers.NON_EFFECTIVE,
        },
        nonEffective: {
            dark: Enums.DamageMultipliers.RESISTANT,
            normal: Enums.DamageMultipliers.NON_EFFECTIVE,
        },
        weakness: {
            dark: Enums.DamageMultipliers.SUPER_EFFECTIVE,
            ghost: Enums.DamageMultipliers.SUPER_EFFECTIVE,
        },
    },
    grass: {
        colour: Enums.PokemonTypeColour.GRASS,
        name: Enums.PokemonTypeName.GRASS,
        superEffective: {
            ground: Enums.DamageMultipliers.SUPER_EFFECTIVE,
            rock: Enums.DamageMultipliers.SUPER_EFFECTIVE,
            water: Enums.DamageMultipliers.SUPER_EFFECTIVE,
        },
        resists: {
            electric: Enums.DamageMultipliers.RESISTANT,
            grass: Enums.DamageMultipliers.RESISTANT,
            ground: Enums.DamageMultipliers.RESISTANT,
            water: Enums.DamageMultipliers.RESISTANT,
        },
        nonEffective: {
            bug: Enums.DamageMultipliers.RESISTANT,
            dragon: Enums.DamageMultipliers.RESISTANT,
            fire: Enums.DamageMultipliers.RESISTANT,
            flying: Enums.DamageMultipliers.RESISTANT,
            grass: Enums.DamageMultipliers.RESISTANT,
            poison: Enums.DamageMultipliers.RESISTANT,
            steel: Enums.DamageMultipliers.RESISTANT,
        },
        weakness: {
            bug: Enums.DamageMultipliers.SUPER_EFFECTIVE,
            fire: Enums.DamageMultipliers.SUPER_EFFECTIVE,
            flying: Enums.DamageMultipliers.SUPER_EFFECTIVE,
            ice: Enums.DamageMultipliers.SUPER_EFFECTIVE,
            poison: Enums.DamageMultipliers.SUPER_EFFECTIVE,
        },
    },
    ground: {
        colour: Enums.PokemonTypeColour.GROUND,
        name: Enums.PokemonTypeName.GROUND,
        superEffective: {
            electric: Enums.DamageMultipliers.SUPER_EFFECTIVE,
            fire: Enums.DamageMultipliers.SUPER_EFFECTIVE,
            poison: Enums.DamageMultipliers.SUPER_EFFECTIVE,
            rock: Enums.DamageMultipliers.SUPER_EFFECTIVE,
            steel: Enums.DamageMultipliers.SUPER_EFFECTIVE,
        },
        resists: {
            poison: Enums.DamageMultipliers.RESISTANT,
            rock: Enums.DamageMultipliers.RESISTANT,
            electric: Enums.DamageMultipliers.NON_EFFECTIVE,
        },
        nonEffective: {
            bug: Enums.DamageMultipliers.RESISTANT,
            grass: Enums.DamageMultipliers.RESISTANT,
            flying: Enums.DamageMultipliers.NON_EFFECTIVE,
        },
        weakness: {
            grass: Enums.DamageMultipliers.SUPER_EFFECTIVE,
            ice: Enums.DamageMultipliers.SUPER_EFFECTIVE,
            water: Enums.DamageMultipliers.SUPER_EFFECTIVE,
        },
    },
    ice: {
        colour: Enums.PokemonTypeColour.ICE,
        name: Enums.PokemonTypeName.ICE,
        superEffective: {
            dragon: Enums.DamageMultipliers.SUPER_EFFECTIVE,
            flying: Enums.DamageMultipliers.SUPER_EFFECTIVE,
            grass: Enums.DamageMultipliers.SUPER_EFFECTIVE,
            ground: Enums.DamageMultipliers.SUPER_EFFECTIVE,
        },
        resists: {
            ice: Enums.DamageMultipliers.RESISTANT,
        },
        nonEffective: {
            fire: Enums.DamageMultipliers.RESISTANT,
            ice: Enums.DamageMultipliers.RESISTANT,
            steel: Enums.DamageMultipliers.RESISTANT,
            water: Enums.DamageMultipliers.RESISTANT,
        },
        weakness: {
            fighting: Enums.DamageMultipliers.SUPER_EFFECTIVE,
            fire: Enums.DamageMultipliers.SUPER_EFFECTIVE,
            rock: Enums.DamageMultipliers.SUPER_EFFECTIVE,
            steel: Enums.DamageMultipliers.SUPER_EFFECTIVE,
        },
    },
    normal: {
        colour: Enums.PokemonTypeColour.NORMAL,
        name: Enums.PokemonTypeName.NORMAL,
        superEffective: {

        },
        resists: {
            ghost: Enums.DamageMultipliers.NON_EFFECTIVE,
        },
        nonEffective: {
            rock: Enums.DamageMultipliers.RESISTANT,
            steel: Enums.DamageMultipliers.RESISTANT,
            ghost: Enums.DamageMultipliers.NON_EFFECTIVE,
        },
        weakness: {
            fighting: Enums.DamageMultipliers.SUPER_EFFECTIVE,
        },
    },
    poison: {
        colour: Enums.PokemonTypeColour.POISON,
        name: Enums.PokemonTypeName.POISON,
        superEffective: {
            grass: Enums.DamageMultipliers.SUPER_EFFECTIVE,
            fairy: Enums.DamageMultipliers.SUPER_EFFECTIVE,
        },
        resists: {
            bug: Enums.DamageMultipliers.RESISTANT,
            fighting: Enums.DamageMultipliers.RESISTANT,
            fairy: Enums.DamageMultipliers.RESISTANT,
            grass: Enums.DamageMultipliers.RESISTANT,
            poison: Enums.DamageMultipliers.RESISTANT,
        },
        nonEffective: {
            ghost: Enums.DamageMultipliers.RESISTANT,
            ground: Enums.DamageMultipliers.RESISTANT,
            poison: Enums.DamageMultipliers.RESISTANT,
            rock: Enums.DamageMultipliers.RESISTANT,
            steel: Enums.DamageMultipliers.NON_EFFECTIVE,
        },
        weakness: {
            ground: Enums.DamageMultipliers.SUPER_EFFECTIVE,
            psychic: Enums.DamageMultipliers.SUPER_EFFECTIVE,
        },
    },
    psychic: {
        colour: Enums.PokemonTypeColour.PSYCHIC,
        name: Enums.PokemonTypeName.PSYCHIC,
        superEffective: {
            fighting: Enums.DamageMultipliers.SUPER_EFFECTIVE,
            poison: Enums.DamageMultipliers.SUPER_EFFECTIVE,
        },
        resists: {
            fighting: Enums.DamageMultipliers.RESISTANT,
            psychic: Enums.DamageMultipliers.RESISTANT,
        },
        nonEffective: {
            psychic: Enums.DamageMultipliers.RESISTANT,
            steel: Enums.DamageMultipliers.RESISTANT,
            dark: Enums.DamageMultipliers.NON_EFFECTIVE,
        },
        weakness: {
            bug: Enums.DamageMultipliers.SUPER_EFFECTIVE,
            dark: Enums.DamageMultipliers.SUPER_EFFECTIVE,
            ghost: Enums.DamageMultipliers.SUPER_EFFECTIVE,
        },
    },
    rock: {
        colour: Enums.PokemonTypeColour.ROCK,
        name: Enums.PokemonTypeName.ROCK,
        superEffective: {
            bug: Enums.DamageMultipliers.SUPER_EFFECTIVE,
            fire: Enums.DamageMultipliers.SUPER_EFFECTIVE,
            flying: Enums.DamageMultipliers.SUPER_EFFECTIVE,
            ice: Enums.DamageMultipliers.SUPER_EFFECTIVE,
        },
        resists: {
            fire: Enums.DamageMultipliers.RESISTANT,
            flying: Enums.DamageMultipliers.RESISTANT,
            normal: Enums.DamageMultipliers.RESISTANT,
            poison: Enums.DamageMultipliers.RESISTANT,
        },
        nonEffective: {
            fighting: Enums.DamageMultipliers.RESISTANT,
            ground: Enums.DamageMultipliers.RESISTANT,
            steel: Enums.DamageMultipliers.RESISTANT,
        },
        weakness: {
            fighting: Enums.DamageMultipliers.SUPER_EFFECTIVE,
            grass: Enums.DamageMultipliers.SUPER_EFFECTIVE,
            ground: Enums.DamageMultipliers.SUPER_EFFECTIVE,
            steel: Enums.DamageMultipliers.SUPER_EFFECTIVE,
            water: Enums.DamageMultipliers.SUPER_EFFECTIVE,
        },
    },
    steel: {
        colour: Enums.PokemonTypeColour.STEEL,
        name: Enums.PokemonTypeName.STEEL,
        superEffective: {
            fairy: Enums.DamageMultipliers.SUPER_EFFECTIVE,
            ice: Enums.DamageMultipliers.SUPER_EFFECTIVE,
            rock: Enums.DamageMultipliers.SUPER_EFFECTIVE,
        },
        resists: {
            bug: Enums.DamageMultipliers.RESISTANT,
            dragon: Enums.DamageMultipliers.RESISTANT,
            flying: Enums.DamageMultipliers.RESISTANT,
            fairy: Enums.DamageMultipliers.RESISTANT,
            grass: Enums.DamageMultipliers.RESISTANT,
            ice: Enums.DamageMultipliers.RESISTANT,
            normal: Enums.DamageMultipliers.RESISTANT,
            psychic: Enums.DamageMultipliers.RESISTANT,
            rock: Enums.DamageMultipliers.RESISTANT,
            steel: Enums.DamageMultipliers.RESISTANT,
            poison: Enums.DamageMultipliers.NON_EFFECTIVE,
        },
        nonEffective: {
            electric: Enums.DamageMultipliers.RESISTANT,
            fire: Enums.DamageMultipliers.RESISTANT,
            steel: Enums.DamageMultipliers.RESISTANT,
            water: Enums.DamageMultipliers.RESISTANT,
        },
        weakness: {
            fighting: Enums.DamageMultipliers.SUPER_EFFECTIVE,
            fire: Enums.DamageMultipliers.SUPER_EFFECTIVE,
            ground: Enums.DamageMultipliers.SUPER_EFFECTIVE,
        },
    },
    water: {
        colour: Enums.PokemonTypeColour.WATER,
        name: Enums.PokemonTypeName.WATER,
        superEffective: {
            fire: Enums.DamageMultipliers.SUPER_EFFECTIVE,
            ground: Enums.DamageMultipliers.SUPER_EFFECTIVE,
            rock: Enums.DamageMultipliers.SUPER_EFFECTIVE,
        },
        resists: {
            fire: Enums.DamageMultipliers.RESISTANT,
            ice: Enums.DamageMultipliers.RESISTANT,
            steel: Enums.DamageMultipliers.RESISTANT,
            water: Enums.DamageMultipliers.RESISTANT,
        },
        nonEffective: {
            dragon: Enums.DamageMultipliers.RESISTANT,
            grass: Enums.DamageMultipliers.RESISTANT,
            water: Enums.DamageMultipliers.RESISTANT,
        },
        weakness: {
            electric: Enums.DamageMultipliers.SUPER_EFFECTIVE,
            grass: Enums.DamageMultipliers.SUPER_EFFECTIVE,
        },
    }
};