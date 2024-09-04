import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store, actions} = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">StarWars</span>
			</Link>
			<div className="ml-auto">
				<div className="dropdown">
				<button className= "btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favoritos {store.listafavoritos.length}
					</button>
				<ul className="dropdown-menu">
					{store.listafavoritos.map((favorito) => {
						return <li className="dropdown-item">
							<span>{favorito}</span>
							<button onClick={() => actions.borrarFavorito(favorito)}>🗑️</button>
						</li>
					})}
				</ul>
			</div>
			</div>
		</nav>
	);
};
