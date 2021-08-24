import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Ta funcionando</h1>
        <p>Meu primeiro React</p>
        <a
          className="App-link"
          href="https://google.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google
        </a>
      </header>
    </div>
  );
}

export default App;
