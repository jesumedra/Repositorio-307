import React, { useState } from "react";
import ResultadoComponent from "./ResultadoComponent";


import Edad from "./Edad/Edadmsj";
import Altura from "./Altura/Alturamsj";
import Peso from "./Peso/Pesomsj";

const IMCCalculadora = () => {
  const [sexo, setSexo] = useState("Mujer");
  const [edad, setEdad] = useState(null);
  const [altura, setAltura] = useState(null);
  const [peso, setPeso] = useState(null);
  const [resultado, setResultado] = useState(null);

  const calcularIMC = () => {
    // Validación
    if (!edad || !altura || !peso) {
      setResultado({
        imc: null,
        estado: "Completa todos los campos antes de calcular."
      });
      return;
    }

    const alturaMetros = altura / 100;
    const imc = peso / (alturaMetros * alturaMetros);

    let estado = "";
    if (imc < 18.5) estado = "Bajo peso";
    else if (imc < 24.9) estado = "Peso normal";
    else if (imc < 29.9) estado = "Sobrepeso";
    else estado = "Obesidad";

    setResultado({
      imc: imc.toFixed(2),
      estado: estado
    });
  };

  const reiniciar = () => {
    setSexo("Mujer");
    setEdad(null);
    setAltura(null);
    setPeso(null);
    setResultado(null);
  };

  return (
    <div className="card">
      <h2 className="title">Calculadora de IMC</h2>

      {/* ---------- Selección SEXO ---------- */}
      <div className="sexo-container">
        <button
          className={`sexo-btn ${sexo === "Mujer" ? "mujer-select" : ""}`}
          onClick={() => setSexo("Mujer")}
        >
          Mujer
        </button>

        <button
          className={`sexo-btn ${sexo === "Hombre" ? "hombre-select" : ""}`}
          onClick={() => setSexo("Hombre")}
        >
          Hombre
        </button>
      </div>

      {/* ---------- COMPONENTES NUEVOS ---------- */}
      <Edad onChange={(v) => setEdad(v)} />
      <Altura onChange={(v) => setAltura(v)} />
      <Peso onChange={(v) => setPeso(v)} />

      <button className="calcular-btn" onClick={calcularIMC}>
        CALCULAR
      </button>

      {resultado && (
        <ResultadoComponent
          imc={resultado.imc}
          estado={resultado.estado}
          reiniciar={reiniciar}
        />
      )}
    </div>
  );
};

export default IMCCalculadora;
