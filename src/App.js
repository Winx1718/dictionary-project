import "./App.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <Search defaultKeyWord="forest" />
        <footer className="text-center">
          Open-source{" "}
          <a
            href="https://github.com/Winx1718/dictionary-project.git"
            target="_blank"
            rel="noreferrer"
          >
            code
          </a>{" "}
          by Layna Moore
        </footer>
      </div>
    </div>
  );
}
