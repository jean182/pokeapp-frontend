import { useLocation } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_POKEMON_BY_ID } from "@gql";
import { IPokemonResponse, IPokemonVars } from "./pokemon-info.interfaces";
import Loader from "@components/loader";
import Badge from "@components/badge";
import { PokemonTypes } from "@utils/constants";
import {
  humanize,
  imageUrlGenerator,
} from "@components/pokemon-list-item/pokemon-list-item.handlers";
interface LocationState {
  id: number;
}

export default function PokemonInfo() {
  const { state } = useLocation<LocationState>();
  const { loading, data } = useQuery<IPokemonResponse, IPokemonVars>(
    GET_POKEMON_BY_ID,
    {
      variables: {
        id: state?.id ?? -1,
      },
      fetchPolicy: "cache-first",
    }
  );
  if (loading) return <Loader />;

  const pokemon = data?.pokemon;
  console.log("Pokemon: ", pokemon);

  return pokemon ? (
    <div className="row">
      <div className="col">
        <div className="card-body">
          <img
            className="card-img-top"
            src={imageUrlGenerator(pokemon.id)}
            alt={pokemon.name}
            width="500"
            height="500"
          />
          <h5 className="card-title">
            {humanize(pokemon.name)}
            <ul className="list-inline">
              {pokemon.pokemonTypes.map(({ pokemonType }) => (
                <li className="list-inline-item" key={pokemonType.id}>
                  <Badge name={pokemonType.name as PokemonTypes} />
                </li>
              ))}
            </ul>
          </h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div className="col">
        <div className="card-body">
          <h5>Pokedex index {pokemon.id}</h5>
          <ul>
            <li className="card-text">Height: {pokemon.height}</li>
            <li className="card-text">Weigth: {pokemon.weight}</li>
          </ul>
          <h5>Base Stats</h5>
          <ol>
            {pokemon.pokemonStats.map(({ pokemonStat, base_stat }) => (
              <li key={pokemonStat.id} className="card-text">
                {humanize(pokemonStat.name)}: {base_stat}
              </li>
            ))}
          </ol>
          <h5>Abilities</h5>
          <ul>
            {pokemon.pokemonAbilities.map(({ id, name }) => (
              <li key={id} className="card-text">
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  ) : (
    <h1>error!</h1>
  );
}
