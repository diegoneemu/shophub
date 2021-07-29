import React, { FunctionComponent } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { Logo } from "./Logo";
import { Navbar } from "./Navbar";

const Home: FunctionComponent = () => (<div><h1>Home</h1></div>)
const Shop: FunctionComponent = () => (<div><h1>Shop</h1></div>)
const Blog: FunctionComponent = () => (<div><h1>Blog</h1></div>)
const Contact: FunctionComponent = () => (<div><h1>Contact</h1></div>)

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
