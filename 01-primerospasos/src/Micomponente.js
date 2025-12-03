import React from "react";

const Micomponente = () => {
    let nombre = "Jesus Medrano"
    let ocupacion = "Estudiante"
    let anios = "17"
    let aniodenacimiento = "2008"

    let edad = 2025 - aniodenacimiento

    
    let nombre2 = "Genesis Vera"
    let ocupacion2 = "Estudiante"
    let edad2 = "16"
    let edades = 2025 - 2009



    return (
        <div class="primer-componente">
            <p>creando en la clase de frameworks</p>
            <ul>
                <li>Nombre : <strong>{nombre}</strong> </li>
                <li>Ocupacion : <strong>{ocupacion}</strong> </li>
                <li>Anios: <strong>{anios}</strong> </li>
                <li>Edad : <strong>{edad}</strong></li>
            </ul>
            <div class="segundo-componente">
                <h3>Alumnos :</h3>
                    <ul>
                        <li>Nombre : <strong>{nombre2}</strong></li>
                        <li>Ocupacion : <strong>{ocupacion2}</strong></li>
                        <li>Años : <strong>{edad2}</strong></li>
                        <li>Edad cumplida : <strong>{edades}</strong></li>        
                    </ul>
            </div>  
        </div>
    );

};




export default Micomponente