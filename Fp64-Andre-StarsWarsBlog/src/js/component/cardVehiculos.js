import React,{useContext} from "react";
import { Context } from "../store/appContext"
export const CardVehiculos = ({vehiculo}) => {
    const {store,actions} = useContext(Context)
    return (
        <div className="card" >
            <img src={`https://starwars-visualguide.com/assets/img/vehicles/${vehiculo.uid}.jpg`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{vehiculo.name}</h5>
                <a href="#" className="btn btn-primary">Leer más</a>
                <div>Lorem Ipsum es simplemente el texto de relleno.</div>
                <button onClick={()=>actions.favoriteCheck(vehiculo.name)}>❤️</button>
            </div>
        </div>
    )
}

