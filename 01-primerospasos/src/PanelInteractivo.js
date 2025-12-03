import React from "react";

const PanelInteractivo = (props) => {

    // --- EVENTOS DEL BOTÓN ---
    const manejarClick = (Jesus) => {
        alert(`¡Me has hecho clic! Soy: Jesus` );
        console.log("¡Me has hecho clic!");
    };

    const manejarDobleClick = () => {
        alert("¡Haz hecho doble click!")
        console.log("¡Doble clic! ¡Acción especial activada!");
    };

    // --- EVENTOS DE RATÓN ---
    const alEntrar = () => {
        console.log("El ratón ha entrado en la zona sensible.");
    };

    const alSalir = () => {
        console.log("El ratón ha salido de la zona sensible.");
    };

    // --- EVENTOS DE FOCO ---
    const alEnfocar = () => {
        console.log("Atención: Estás a punto de escribir tu nombre.");
    };

    const alPerderFoco = () => {
        console.log("Has terminado de escribir: Jesus ");
    };

    return (
        <div>
            <h1>Panel de Control Interactivo</h1>
            <p>Interactúa con los elementos para ver qué pasa en la consola.</p>

            {/* --- BOTÓN DE ACCIÓN --- */}
            <button
                onClick={() => manejarClick(props.nombre)}
                onDoubleClick={manejarDobleClick}
            >
                Botón de Acción
            </button>
             <button
                className="button2"
                onDoubleClick={manejarDobleClick}
            >
                Botón de Acción
            </button>

            <hr />

            {/* --- ZONA SENSIBLE --- */}
            <div
                className="zona-sensible"
                onMouseEnter={alEntrar}
                onMouseLeave={alSalir}
            >
                Pasa el ratón por aquí
            </div>

            <hr />

            {/* --- CAMPO DE TEXTO --- */}
            <div className="campo-texto">
                <label >Tu Nombre: </label>
                <input
                    type="text"
                    placeholder="Escribe tu nombre..."
                    onFocus={alEnfocar}
                    onBlur={alPerderFoco}
                />
            </div>
        </div>
    );
};

export default PanelInteractivo;

