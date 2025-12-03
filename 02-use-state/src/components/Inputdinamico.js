import React, { useState } from 'react'

const Inputdinamico = () => {
    const [nombre, setNombre] = useState("")

    const cambiarNombre = (e, nombreFijo) => {
        setNombre(nombreFijo)
    }

    return (
        <div>
            <h1>Input dinámico</h1>

            <p>Nombre: <strong>{nombre}</strong></p>

            <p>
                <input
                    type='text'
                    placeholder='Ingresa tu nombre'
                    onChange={e => cambiarNombre(e, e.target.value)}
                />
            </p>

            <p>
                <button onClick={() => setNombre("")}>Borrar</button>
            </p>
        </div>
    )
}

export default Inputdinamico
