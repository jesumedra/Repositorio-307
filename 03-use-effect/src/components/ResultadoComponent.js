import React from "react";

const ResultadoComponent = ({ imc, estado, reiniciar }) => {
  return (
    <div className="tabla-resultado">
      <h3>Resultado del IMC</h3>

      {imc ? (
        <>
          <p><strong>IMC:</strong> {imc}</p>
          <p><strong>Estado:</strong> {estado}</p>
        </>
      ) : (
        <p>{estado}</p>
      )}

      <table className="tabla">
        <thead>
          <tr>
            <th>Clasificación</th>
            <th>Rango IMC</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Bajo peso</td><td>Menos de 18.5</td></tr>
          <tr><td>Normal</td><td>18.5 – 24.9</td></tr>
          <tr><td>Sobrepeso</td><td>25 – 29.9</td></tr>
          <tr><td>Obesidad</td><td>30 o más</td></tr>
        </tbody>
      </table>

      <button onClick={reiniciar} className="calcular-btn">
        Reiniciar
      </button>
    </div>
  );
};

export default ResultadoComponent;