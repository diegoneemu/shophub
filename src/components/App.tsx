import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { Blog } from "./Pages/Blog";
import { Contact } from "./Pages/Contact";
import { Home } from "./Pages/Home";
import { Logo } from "./Logo";
import { Navbar } from "./Navbar";
import { Shop } from "./Pages/Shop";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Logo />
          <Navbar />
          <section id="pageContent">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/shop">
                <Shop />
              </Route>
              <Route exact path="/blog">
                <Blog />
              </Route>
              <Route exact path="/contact">
                <Contact />
              </Route>
            </Switch>
          </section>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
