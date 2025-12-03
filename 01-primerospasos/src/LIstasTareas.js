import React from "react";

export default function ListaTareas() {
  const tareas = [
    "Aprender React",
    "Crea un componente",
    "Practicar con map()",
    "Hacer el ejercicio"
  ];

  return (
    <div>
      <h2>Mi Lista de Tareas</h2>
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>{tarea}</li>
        ))}
      </ul>
    </div>
  );
}
