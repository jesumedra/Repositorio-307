import React from 'react';

const Perfil = (props) => {
  return (
    <div className="cardStyle">
      <img className="imageStyle" src={props.avatar} alt="Foto de perfil" />
      <h3>
        {props.nombre} {props.esVerificado ? "✅" : ""}
      </h3>
      <p className="usuario">@{props.usuario}</p>
      <p className="bio">{props.bio}</p>
    </div>
  );
};


export default Perfil;
