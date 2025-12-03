import React, { useState } from "react";

const Edad = ({ onChange }) => {
  const [edad, setEdad] = useState("");
  const [mensaje, setMensaje] = useState("");

  const procesarEdad = (valor) => {
    setEdad(valor);
    let msj = "";
    const num = parseInt(valor);

    if (!num) msj = "Ingresa una edad válida.";
    else if (num < 15) msj = "Eres muy joven, el IMC puede no ser preciso en menores.";
    else if (num >= 15 && num <= 59) msj = "Edad dentro del rango estándar para el IMC.";
    else if (num >= 60) msj = "En adultos mayores el IMC puede variar por masa muscular.";

    setMensaje(msj);
    onChange(num);
  };

  return (
    <div>
      <label>Edad</label>
      <input
        type="number"
        placeholder="Ej: 35"
        value={edad}
        onChange={(e) => procesarEdad(e.target.value)}
        className="input"
      />
      <p className="info">{mensaje}</p>
    </div>
  );
};

export default Edad;
