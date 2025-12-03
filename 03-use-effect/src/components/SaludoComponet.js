import React from 'react'

const SaludoComponet = () => {
    return (
        <div>
            <h3> Hola Jesus, Como estas</h3>
            <button onClick={e => alert("bienvenido")}>
                Mostrar mensaje
            </button>
        </div>
    )
}

export default SaludoComponet
