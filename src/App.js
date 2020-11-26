import logo from "./assets/icons/unicrn1.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Team -- Hello Tech Meeting</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Dudes
        </a>
      </header>
    </div>
  );
}

export default App;
