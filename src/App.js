import HookUseMouse from '../src/componentes/HookUseMouse';
import HookUseHover from '../src/componentes/HookUseHover';
import HookUseGeolocation from '../src/componentes/HookUseGeolocation';
import HookUseBattery from '../src/componentes/HookUseBattery';
import HookUseKey from '../src/componentes/HookUseKey';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Usa estos hooks para hacerte la vida mas facil</h1>
        <a
          className="Hooks-link"
          href="https://github.com/streamich/react-use"
          target="_blank"
          rel="noopener noreferrer"
        >
          Estos son todos los Hooks que estan en la libreria
        </a>
      </header>
      <hr className="App-hr"></hr>
      <main className="App-main">
        <HookUseMouse />
        <HookUseHover />
        <HookUseGeolocation />
        <HookUseBattery />
        <HookUseKey />
      </main>
    </div>
  );
}

export default App;
