import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { AppContext, initialState, reducer } from '@appcontext';
import React from "react";
import { CSSTransition } from "react-transition-group";

import Header from "@components/header";
import Footer from "@components/footer";
import { ROUTES } from "@utils/constants";

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
            <Footer />
          </>
        </Router>
      </AppContext.Provider>
    )
}
