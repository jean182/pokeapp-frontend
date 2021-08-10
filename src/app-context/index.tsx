import { ONE } from '@utils/constants'

import React from 'react'

import {
  Actions,
  AppCreateContext,
  ContextAction,
  ContextState,
} from './app-context.interfaces'
    
  export const initialState: ContextState = {
    lastKnownPokedexPage: 1,
  }
  
  export const reducer = (state: ContextState, action: ContextAction) => {
    switch (action.type) {
      case Actions.SET_LAST_KNOWN_POKEDEX_PAGE:
        return {
          ...state,
          lastKnownPokedexPage: action.payload
        }
      default:
        return state
    }
  }
  
  export const AppContext = React.createContext<AppCreateContext>({
    state: initialState,
    dispatch: () => null,
  })