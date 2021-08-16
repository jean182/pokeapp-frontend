export interface IPokemonAbility {
  name: string;
}

// export interface IPokemonMove {
//   name: string;
// }

export interface IPokemonStat {
  base_stat: string;
  pokemonStat: {
    name: string;
  };
}

export interface IPokemonType {
  name: string;
}

export interface IPokemonData {
  height: number;
  id: number;
  name: string;
  weight: number;
  pokemonAbilities: IPokemonAbility[];
  // pokemonMoves: IPokemonMove[];
  pokemonStats: IPokemonStat[];
  pokemonTypes: IPokemonType[];
}

export interface IPokemonResponse {
  pokemon: IPokemonData;
}

export interface IPokemonVars {
  id: number;
}
