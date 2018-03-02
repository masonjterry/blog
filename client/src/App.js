import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Add from "./pages/Add";

export default class App extends React.Component {
  render() {
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/add" component={Add} />
        </Switch>
      </Router>
    );
  }
}
