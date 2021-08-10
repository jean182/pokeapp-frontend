import { IPokemonListItem } from "@components/pokemon-list-item/pokemon-list-item.interfaces"

import { IPokemonListResponse, IPokemonType } from "./pokemon-list.interfaces"


const transformType = ({ pokemonType: { id, name } }: IPokemonType) =>( { id, name })

export const transformData = ({ id, name, pokemonTypes }: IPokemonListResponse): IPokemonListItem => ({
    id,
    name,
    types: pokemonTypes.map(transformType),
})