import { Link } from "react-router-dom";

import { humanize, imageUrlGenerator } from "./pokemon-list-item.handlers";
import { IPokemonListItem } from "./pokemon-list-item.interfaces";

export default function PokemonListItem({ id, name, types }: IPokemonListItem) {
  return (
    <div className="card my-2">
      <img src={imageUrlGenerator(id)} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{humanize(name)}</h5>
        <Link
          to={{ pathname: `/pokedex/${name}`, state: { id } }}
          className="btn btn-primary"
        >
          View More
        </Link>
      </div>
    </div>
  );
}
