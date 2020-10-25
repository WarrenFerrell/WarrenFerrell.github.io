import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import Home from "./containers/Home";
import FAQ from "./containers/FAQ";
import NotFound from "./containers/NotFound";

export default function Routes() {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/faq" component={FAQ} />
        <Route component={NotFound} />
      </Switch>
    </HashRouter>
  );
}
