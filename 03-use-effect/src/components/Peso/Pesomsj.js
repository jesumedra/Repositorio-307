import React, { useState } from "react";

const Peso = ({ onChange }) => {
  const [peso, setPeso] = useState("");
  const [mensaje, setMensaje] = useState("");

  const procesarPeso = (valor) => {
    setPeso(valor);
    let msj = "";
    const num = parseFloat(valor);

    if (!num) msj = "Ingresa un peso válido.";
    else if (num < 40) msj = "Peso muy bajo, revisa tu salud si no es normal.";
    else if (num >= 40 && num <= 120) msj = "Peso dentro del rango estándar.";
    else if (num > 120) msj = "Peso elevado, el IMC puede mostrar riesgo aumentado.";

    setMensaje(msj);
    onChange(num);
  };

  return (
    <div>
      <label>Peso (kg)</label>
      <input
        type="number"
        placeholder="Ej: 62.5"
        value={peso}
        onChange={(e) => procesarPeso(e.target.value)}
        className="input"
      />
      <p className="info">{mensaje}</p>
    </div>
  );
};

export default Peso;
