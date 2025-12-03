import React, { useState } from 'react'

const Contador = () => {

  const [contador, setContador] = useState(0)

  const masUno = () => {
    setContador(contador + 1)
  }

  const reinicio = () => {
    setContador(0)
  }
    const resta = () => {
    setContador(contador -1)
  }

  return (
    <div>
      <h2>Contador</h2>

      <p>contador: <strong>{contador}</strong></p>

      <p>
        <button onClick={masUno}>Aumentar</button>
        <button onClick={reinicio}>Reiniciar</button>
        <button onClick={resta}>Resta</button>
      </p>
    </div>
  )
}

export default Contador