import React, { useState } from "react";

const Altura = ({ onChange }) => {
  const [altura, setAltura] = useState("");
  const [mensaje, setMensaje] = useState("");

  const procesarAltura = (valor) => {
    setAltura(valor);
    let msj = "";
    const num = parseFloat(valor);

    if (!num) msj = "Ingresa una altura válida.";
    else if (num < 140) msj = "Altura baja, la interpretación del IMC puede variar.";
    else if (num >= 140 && num <= 190) msj = "Altura dentro del rango promedio.";
    else if (num > 190) msj = "Altura alta, el IMC sigue siendo válido pero poco común.";

    setMensaje(msj);
    onChange(num);
  };

  return (
    <div>
      <label>Altura (cm)</label>
      <input
        type="number"
        placeholder="Ej: 165"
        value={altura}
        onChange={(e) => procesarAltura(e.target.value)}
        className="input"
      />
      <p className="info">{mensaje}</p>
    </div>
  );
};

export default Altura;
