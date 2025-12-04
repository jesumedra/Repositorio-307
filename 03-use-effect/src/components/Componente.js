import React from 'react'

const Componente = (props) => {
   
  return (
    <div>
      <h1>Componente uno</h1>
      <p>Este es el contenido del componente uno:</p>
      <ul>
        <li>Nombre: <strong>{props.nombre}</strong> Elemento 1</li>
        <li>Apellido: <strong>{props.apellido}</strong> Elemento 2</li>
        <li>Segundo Apellido: <strong>{props.segundoapellido} </strong>Elemento 3</li>
      </ul>
    </div>
  )
}

export default Componente
