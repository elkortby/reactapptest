import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Error from "./components/Error"
import Menubar from "./components/Menubar";
import Auth from "./components/auth/Auth"

export default function ReactRouter() {
  return (
    <Router>
      <Menubar/>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={About} exact path="/about" />
        <Route component={Auth} exact path="/auth" />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}