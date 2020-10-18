
import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home  from "./pages/Home";
import About  from "./pages/About";
import NotFound  from "./pages/NotFound";

export default function Routes() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/About"><About /></Route>
      <Route component = {NotFound}/>
    </Switch>
    </BrowserRouter>
  );
}