import { PokemonType } from "./pokemon.type.interface";

export interface Pokemon {
    name: string;
    cp: string;
    dex: string;
    hp: string;
    atk: string;
    def: string;
    region: string;
    
    types: Array<string>;
    wholeType: Array<PokemonType>;
    img: Array<string>;
    variations: Array<string>;
    fastMoves: Array<string>;
    chargeMoves: Array<string>;
    bestMoves: { [key: string]: string };

    superEffective: { [key: string]: number };
    resists: { [key: string]: number };
    nonEffective: { [key: string]: number };
    weakness: { [key: string]: number };
}