import React from 'react'

const EventosComponente = () => {
    const hacerClick = (nombre) => {
        alert("haz hecho click sobre el boton: " + nombre)
    }

    const HacerDobleClick = () => {
        alert("haz hecho doble click")
    }

    const hazEntrado = (e, accion) => {
        console.log("haz entrado " + accion + " en la caja")
    }
    const hazSalido = (e, accion) => {
        console.log("hola " + accion + " de la caja")
    }
    const dentroInput = () => {
        console.log("haz entrado en el input")
    }
    const salidoInput = () => {
            console.log ("haz salido del input")
        }
    return (


        <div>
            <h2>Eventos</h2>
            <div>
                <button

                    onClick={() => hacerClick(
                        "Jesus Medrano"
                    )}>Haz click aqui
                </button>
            </div>


            <div>
                <button onDoubleClick={HacerDobleClick}>Hacer doble click</button>
            </div>



            <div className='caja'
                onMouseEnter={e => hazEntrado(e, "entrado")}
                Pasa por encima
                onMouseLeave={e => hazSalido(e, "salido")}>
            </div>

            <div><input type='text'
                onFocus={ dentroInput}
                onBlur={salidoInput }
            />
            </div>
        </div>

    )
}

export default EventosComponente
