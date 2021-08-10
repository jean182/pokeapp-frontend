import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Header from "../components/header";
import { ROUTES } from "../utils/constants";

export default function Routes() {
    return (
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
    )
}