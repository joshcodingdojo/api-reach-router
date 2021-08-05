import { Router } from "@reach/router";
import "./App.css";
import About from "./components/About";
import Display from "./components/Display";
import Input from "./components/Input";

function App() {
  return (
    <div className="App">
      <Input />
      <Router>
        <Display path="/display/:pokeId" />
        <About path="/about" />
      </Router>
    </div>
  );
}

export default App;
