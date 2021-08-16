import { useLocation } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_POKEMON_BY_ID } from "@gql";
import { IPokemonResponse, IPokemonVars } from "./pokemon-info.interfaces";
import Loader from "@components/loader";
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
          />
          <h5 className="card-title">{humanize(pokemon.name)}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div className="col">
        <div className="card-body">
          <h5 className="card-title">Pokedex index: {pokemon.id}</h5>
          <li className="card-text">Height: {pokemon.height}</li>
          <li className="card-text">Weigth: {pokemon.weight}</li>
          <li className="card-text">Weigth: {pokemon.weight}</li>
        </div>
      </div>
    </div>
  ) : (
    <h1>error!</h1>
  );
}
