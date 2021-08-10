export enum Actions {
  SET_LAST_KNOWN_POKEDEX_PAGE = 'SET_LAST_KNOWN_POKEDEX_PAGE',

}

export interface ContextState {
  lastKnownPokedexPage: number
}

interface SetLastKnownPokedexPage {
  type: Actions.SET_LAST_KNOWN_POKEDEX_PAGE
  payload: number
}

export type ContextAction =
  | SetLastKnownPokedexPage

export interface AppCreateContext {
  state: ContextState
  dispatch: React.Dispatch<ContextAction>
}