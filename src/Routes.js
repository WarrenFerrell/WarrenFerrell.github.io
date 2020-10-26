import React from "react";
import { Route, Switch, Redirect, HashRouter } from "react-router-dom";
import Home from "./containers/Home";
import FAQ from "./containers/FAQ";
import Projects from "./containers/Projects";
import NotFound from "./containers/NotFound";

export default function Routes() {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route exact path={"/home"} component={Home} />
        <Route exact path={"/faq"} component={FAQ} />
        <Route path={"/projects"} component={Projects} />
        <Route exact path={"/blog"} component={NotFound} />
        <Redirect from="/about" to="/faq" />
        <Redirect from="/" to="/home" />
        <Route component={NotFound} />
      </Switch>
    </HashRouter>
  );
}
