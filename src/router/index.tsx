import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { AppContext, initialState, reducer } from '@appcontext';
import { CSSTransition } from "react-transition-group";

import Header from "@components/header";
import { ROUTES } from "@utils/constants";
import React from "react";

export default function Routes() {
  const [state, dispatch] = React.useReducer(reducer, initialState)

    return (
      <AppContext.Provider value={{state, dispatch}}>
        <Router>
          <>
            <Header />
            <div className="container">
              {ROUTES.map(({ path, Component }) => (
                  <Route key={path} exact path={path}>
                    {({ match }) => (
                      <CSSTransition
                        in={match != null}
                        timeout={300}
                        classNames="page"
                        unmountOnExit
                      >
                        <div className="page">
                          <Component />
                        </div>
                      </CSSTransition>
                    )}
                  </Route>
                ))}
              </div>
          </>
        </Router>
      </AppContext.Provider>
    )
}