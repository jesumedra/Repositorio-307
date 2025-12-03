import React, { useState } from 'react'

const MiPrimerestado = () => {

      const [Nombre,setnombre]= useState("Jesus Medrano")
      const CambiarNombre= e =>{
        //elemento ternario = estructura if
        setnombre(nom =>  nom == "jesus medrano"? "genesis vera": "jesus medrano")
      }

      return (
    <div>
      <h2>Mi primer estado</h2>
      <p>Nombre: <strong>{Nombre}</strong></p>
      <button onClick={CambiarNombre}>
        Cambiar Nombre
      </button>
    </div>
  )
}

export default MiPrimerestado