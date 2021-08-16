import { gql } from "@apollo/client";

export const GET_POKEMON_LIST = gql`
  query GetPokemon($limit: Int!, $offset: Int!) {
    pokemon: pokemon_v2_pokemon(limit: $limit, offset: $offset) {
      id
      name
      pokemonSprites: pokemon_v2_pokemonsprites {
        sprites
      }
      pokemonTypes: pokemon_v2_pokemontypes {
        pokemonType: pokemon_v2_type {
          name
        }
      }
    }
    pokemonCount: pokemon_v2_pokemon_aggregate {
      aggregate {
        count
      }
    }
  }
`;

export const GET_POKEMON_BY_ID = gql`
  query GetPokemonById($id: Int!) {
    pokemon: pokemon_v2_pokemon_by_pk(id: $id) {
      id
      name
      height
      weight
    }
  }
`;
