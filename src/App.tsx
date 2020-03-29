import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Apps from './components/apps/apps';
import Home from './components/home/home';
import Lecture from './components/lecture/lecture';
import Practices from './components/practices/practices';
import Quize from './components/quize/quize';
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
          <Route exact path="/lecture">
            <Lecture />
          </Route>
          <Route exact path="/practices">
            <Practices />
          </Route>
          <Route exact path="/quize">
            <Quize />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}