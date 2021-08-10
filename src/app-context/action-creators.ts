  
import { ContextAction, Actions } from './app-context.interfaces'

export function setLastKnownPokedexPage(payload: number): ContextAction {
  return {
    type: Actions.SET_LAST_KNOWN_POKEDEX_PAGE,
    payload,
  }
}
