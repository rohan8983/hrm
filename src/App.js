import React, { Component } from "react";
import "./App.css";
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import { Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

class App extends Component {
  componentWillMount() {
    if (localStorage.getItem("userAuthToken")) {
      history.push("dashboard");
    } else {
      history.push("/");
    }
  }
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/dashboard" exact component={Dashboard} />
        </Switch>
      </Router>
    );
  }
}

export default App;
