import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Nav from "./pages/Nav";
import Admin from "./pages/Admin";

export default class App extends React.Component {
  render() {
    return(
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/admin/add" component={Add} />
            <Route exact path="/admin" component={Admin} />
          </Switch>
        </div>
      </Router>
    );
  }
}
