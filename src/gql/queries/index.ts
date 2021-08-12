import { gql } from "@apollo/client";

export const GET_POKEMON_LIST = gql`
  query GetPokemon($limit: Int!, $offset: Int!) {
    pokemon: pokemon_v2_pokemon(limit: $limit, offset: $offset) {
      id
      name
      pokemonTypes: pokemon_v2_pokemontypes {
          pokemonType: pokemon_v2_type {
              id
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