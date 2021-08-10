export interface IPokemonListItem {
  id: number
  name: string
  types: {
    id: number
    name: string
  }[]
}