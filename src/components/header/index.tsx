import NavLink from "@components/nav-link";

export default function Header() {
  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top d-flex justify-content-center py-3">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/" exact={true}>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
         <NavLink className="nav-link" aria-current="page" to="/pokedex">
            Pokedex
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/about">
            About
          </NavLink>
        </li>
      </ul>
    </header>
  )
}