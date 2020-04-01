import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Apps from './components/apps/apps';
import Home from './components/home/home';
import Practices from './components/practices/practices';
import Header from './components/header/header';

export default function BasicExample() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            <Apps />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/practices">
            <Practices />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}