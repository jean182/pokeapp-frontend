interface BaseResponse {
  __typename?: string;
}

export interface IPokemonAbility extends BaseResponse {
  pokemonAbility: {
    id: number;
    name: string;
  }
}

export interface IPokemonStat extends BaseResponse {
  base_stat: string;
  pokemonStat: {
    id: number;
    name: string;
  };
}

export interface IPokemonType extends BaseResponse {
  pokemonType: {
    id: number;
    name: string;
  };
}

export interface IPokemonResponse extends BaseResponse {
  pokemon: IPokemonData;
}

export interface IPokemonData {
  height: number;
  id: number;
  name: string;
  weight: number;
  pokemonAbilities: IPokemonAbility[];
  pokemonStats: IPokemonStat[];
  pokemonTypes: IPokemonType[];
}

export interface IPokemonVars {
  id: number;
}
