export interface IPokemonData {
  height: number;
  id: number;
  name: string;
  weight: number;
}

export interface IPokemonResponse {
  pokemon: IPokemonData;
}

export interface IPokemonVars {
  id: number;
}
