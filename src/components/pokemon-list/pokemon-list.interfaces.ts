import { IPokemonListItem } from "../pokemon-list-item/pokemon-list-item.interfaces";

export type IPokemonList = IPokemonListItem[]

interface BaseResponse {
    __typename?: string 
}

interface IAggregate extends BaseResponse {
    count: number
}

interface IPokemonCount extends BaseResponse {
    aggregate: IAggregate
}

interface IType extends BaseResponse {
    id: number
    name: string
}

export interface IPokemonType extends BaseResponse {
    pokemonType: IType
}

export interface IPokemonListResponse extends BaseResponse {
    id: number,
    name: string,
    pokemonTypes: IPokemonType[]
}

export interface IPokemonListData {
    pokemon: IPokemonListResponse[]
    pokemonCount: IPokemonCount
}

export interface IPokemonListVars {
    limit: number
    offset: number
}