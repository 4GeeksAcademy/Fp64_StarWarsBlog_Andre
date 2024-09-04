import React,{useContext}  from "react"
import { Context } from "../store/appContext"
export const CardPersonajes = ({personaje}) => {
    const {store,actions} = useContext(Context)
    return (
        <div className="card" >
            <img src={`https://starwars-visualguide.com/assets/img/characters/${personaje.uid}.jpg`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{personaje.name}</h5>
                <div>Lorem Ipsum es simplemente el texto de relleno. </div>
                <a href="#" className="btn btn-primary">Leer más</a>
                <button onClick={()=>actions.favoriteCheck(personaje.name)}>❤️</button>
            </div>
        </div>
    )
}