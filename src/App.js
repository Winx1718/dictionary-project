import "./App.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <Search defaultKeyWord="forest" />
        <footer className="text-center mb-5">
          Open-source{" "}
          <a
            href="https://github.com/Winx1718/dictionary-project.git"
            target="_blank"
            rel="noreferrer"
          >
            code
          </a>{" "}
          by{" "}
          <a
            href="https://www.laynamoore.com/"
            target="_blank"
            rel="noreferrer"
          >
            Layna Moore
          </a>
        </footer>
      </div>
    </div>
  );
}
