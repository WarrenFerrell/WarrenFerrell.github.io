import React, { Component } from "react";
import { Tab, Tabs, Navbar} from "react-bootstrap";
import { NavLink, Switch, Route } from "react-router-dom";
import NotFound from "./NotFound";

export default class extends Component {
  render() {
    const path = "/projects";
    return (
      <div>
        <div className="links">
          <Navbar bg="light" expand="lg">
            <NavLink
              to={`${path}/musicScroll`}
              className="nav-link"
            >
              MusicScroll.js
            </NavLink>
            <NavLink
              to={`${path}/bitcoin`}
              className="nav-link"
            >
              Bitcoin Mining
            </NavLink>
            <NavLink
              to={`${path}/lightsout`}
              className="nav-link"
            >
              Neural Lights Out
            </NavLink>
          </Navbar>
        </div>
		<div className="tabs">
		<Switch>
		  <Route path={`${path}/musicScroll`}  component={NotFound}/>
		  <Route path={`${path}/bitcoin`}  component={NotFound}/>
		  <Route path={`${path}/lightsout`}  component={NotFound}/>
		</Switch>
		</div>
      </div>
    );
  }
}