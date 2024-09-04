import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { CardPersonajes } from "../component/cardPersonajes";
import { CardVehiculos } from "../component/cardVehiculos";
import { Cardplanetas } from "../component/cardPlanetas";

export const Home = () => {
	const { store, actions } = useContext(Context)
	return (
		<div className="text-center mt-5">
			<h1>Personajes</h1>
			<div className="d-flex overflow-x-scroll">
				{store.personajes.map(personaje => (
					<CardPersonajes personaje={personaje} key={personaje.uid} />
				))}
			</div>

			<h1>Vehiculos</h1>
			<div className="d-flex overflow-x-scroll">
				{store.vehiculos.map(vehiculo => (
					<CardVehiculos vehiculo={vehiculo} key={vehiculo.uid} />
				))}
			</div>

			<h1>Planetas</h1>
			<div className="d-flex overflow-x-scroll">
				{store.planetas.map(planeta => (
					<Cardplanetas planeta={planeta} key={planeta.uid} />
				))}
			</div>
			</div>
			)
};
