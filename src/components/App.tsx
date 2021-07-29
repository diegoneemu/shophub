import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { Logo } from "./Logo";
import { Navbar } from "./Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Logo />
        <Navbar />
      </BrowserRouter>
    </div>
  );
}

export default App;
