import React, { useState, useContext } from 'react';
import { Context } from '../store/appContext';





const listaFavoritos = () => {
  const {store, actions} = useContext(Context);
  const [inputValue, setInputValue] = useState('');



  const borrarFavorito = () => {
    const {store, actions} = useContext(Context)
    setStore((prevStore) => ({
      ...prevStore,
      listaFavoritos: prevStore.listaFavoritos.filter((_, i) => i !== index)
    }));
  };

  return (
    <div>
      <h2>Favoritos</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Añadir nuevo favorito"
      />
      <ul>
        {store.listafavoritos?.map((item, index) => (
          <li key={index}>
            {item}
            
            
          </li>
        ))}
      </ul>
    </div>
  );
};
export default listaFavoritos;