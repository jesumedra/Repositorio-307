import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <Componente
            nombre="Jesus"
            apellido="Medrano"
            segundoapellido="Patino"

          />
        </div>
      </header>
    </div>
  );
}

export default App;
