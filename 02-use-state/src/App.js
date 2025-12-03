import logo from './logo.svg';
import './App.css';
import MiPrimerestado from './components/MiPrimerestado';
import Contador from './components/Contador';
import Inputdinamico from './components/Inputdinamico';
import ZonaInteractiva from './components/ZonaInteractiva';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h1>Estados en react</h1>
          <hr />
          <ZonaInteractiva />
          <hr />
          <MiPrimerestado />
          <hr />
          <Contador />
          <hr />
          <Inputdinamico />
          
        </div>
      </header>
    </div>
  );
}

export default App;