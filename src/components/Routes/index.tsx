import React from "react";
import { Route, Switch } from "react-router-dom";
import { Blog } from "../Pages/Blog";
import { Contact } from "../Pages/Contact";
import { Home } from "../Pages/Home";
import { Shop } from "../Pages/Shop";

export function Routes() {
  return (
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
  );
}
