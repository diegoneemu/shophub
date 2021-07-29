import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { CartSummary } from "./CartSummary";
import { Logo } from "./Logo";
import { Navbar } from "./Navbar";
import { Routes } from "./Routes";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Logo />
          <Navbar />
          <section id="pageContent">
            <Routes />
          </section>
          <CartSummary />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
