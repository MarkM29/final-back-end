import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Login,
  Register,
  Dashboard,
  About,
  Start,
} from "../../components/pages";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Start />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
