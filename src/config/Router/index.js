import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login, Register, Dashboard, Summary } from "../../components/pages";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/summary">
          <Summary />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
