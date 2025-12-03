// App.js
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Perfil from "./Perfil";

import PanelInteractivo from "./PanelInteractivo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h2 className="nombre">
          Jesus Medrano <strong>CeCyTem</strong>
        </h2>
        <h3 className="h3">DreamWorks</h3>
        
        <hr />
        <PanelInteractivo />

        <h1>Tarjeta de perfil</h1>

        <Perfil
          avatarUrl="https://www.bing.com/images/search?view=detailV2&ccid=eJld%2bJ5X&id=5414E0AB6ED0858BD571669E8B2A18D14B2961A2&thid=OIP.eJld-J5XnKOER8hUctGWyQHaGk&mediaurl=https%3a%2f%2fpngimg.com%2fuploads%2felon_musk%2felon_musk_PNG29.png&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.78995df89e579ca38447c85472d196c9%3frik%3domEpS9EYKoueZg%26pid%3dImgRaw%26r%3d0&exph=900&expw=1014&q=foto+de+elon+musk&FORM=IRPRST&ck=A184DA5D644F15DFE0CF3AF48A78F09E&selectedIndex=1&itb=1"
          nombre="Elon musk"
          usuario="@Elonmusk"
          bio="Creador de tesla"
          esVerificado={false}
        />
      </header>
    </div>
  );
}

export default App;
