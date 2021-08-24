import { Link } from "react-router-dom";

export default function HomePage() {
	return (
    <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">PokeApp</h1>
        <p className="col-md-8 fs-4">
          Application to display all the pokemon available as now.
        </p>
        <Link className="btn btn-primary btn-lg" to="/pokedex">Go to pokedex</Link>
      </div>
    </div>
	)
}
