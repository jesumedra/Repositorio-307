import React from "react";

function MiSegundoComponente() {
    const nombre = "Jesús Medrano";
    const escuela = "Cecytem Tultitlán";
    const edad = "17 años";

    const materias = [
        { id: 1, nombre: "Programación", profesor: "Mtro. Villamares", creditos: 6 },
        { id: 2, nombre: "Matemáticas", profesor: "Mtra. Ana", creditos: 5 },
        { id: 3, nombre: "Inglés", profesor: "Mtro. Sergio", creditos: 4 },
    ];

    return (
        <div>
            <h1>Bienvenidos a mi segundo componente:</h1>
            <h2>Información del Estudiante:</h2>

            <p><strong>Nombre: </strong>{nombre}</p>
            <p><strong>Edad: </strong>{edad}</p>
            <p><strong>Escuela: </strong>{escuela}</p>

            <h3>Materias inscritas:</h3>
            <ul>
                {materias.map((materia) => (
                    <li key={materia.id}>
                        <p><strong>Materia: </strong>{materia.nombre}</p>
                        <p><strong>Profesor: </strong>{materia.profesor}</p>
                        <p><strong>Créditos: </strong>{materia.creditos}</p>
                        <hr />
                    </li>
                ))}
            </ul>

            <footer>
                <p>Creado por {nombre} - Grupo: 307</p>
            </footer>
        </div>
    );
}

export default MiSegundoComponente;

