export default function ListaTareas() {
  const tareas = [
    { id: 1, nombre: 'Aprender React', completada:  true},
    { id: 2, nombre: 'Crear un componente', completada:  true},
    { id: 3, nombre: 'Practicar con map()', completada:  false},
    { id: 4, nombre: 'Hacer el ejercicio', completada: false },
  ];

  const hayTareas = tareas.length > 0;
  const todasCompletadas = hayTareas && tareas.every(t => t.completada);

  let mensaje = "";
  if (!hayTareas) {
    mensaje = "No hay tareas por completar";
  } else if (todasCompletadas) {
    mensaje = "Tareas completadas, no hay nada por ahora";
  }

  return (
    <div>
      <h2>Mi Lista de Tareas</h2>

      {!hayTareas || todasCompletadas ? (
        <p>{mensaje}</p>
      ) : (
        <ul>
          {tareas.map((tarea) => (
            <li key={tarea.id}>
              {tarea.nombre}{" "}
              {tarea.completada ? (
                <span>✅ (Completada)</span>
              ) : (
                <span>❌ (Pendiente)</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
