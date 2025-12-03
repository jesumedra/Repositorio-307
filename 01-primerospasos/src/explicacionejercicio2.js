import React from 'react'

function explicacionejercicio2() {
   {/* let libros = [
        "hola",
        "adios",
        "pejelagarto",

    ]*/}
    let libros = [

    ]
    return (
        <div className='primer-componente'>
            {/*<h2>Explicacion del ejercicio 2</h2>
      <h3>Jesus Medrano</h3>
      <ul>
        <li>(libros[0])</li>
        <li>(libros[1])</li>
        <li>(libros[2])</li>
      </ul>*/}

            <ul>
                {
                    /*implementar un elemento ternario para mostrar los valores del arri si en este ahi elementos*/
                    libros.length > 0 ? (
                        libros.map((libro, index) => (
                            <li key={index}>(libro)</li>
                        ))
                    ) : (
                        <p>no hay libros existentes</p>
                    )
                }
            </ul>

        </div>
    )
}

export default explicacionejercicio2
