import React from 'react';
import axios from "axios";
import Home from "./pages/Home";
import Add from "./pages/Add";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
  state = {
    text: "anyone there?"
  };

  sayHello = () => {
    axios.get("/api/hello").then((res) => {
      console.log(res);
      this.setState({ text: res.data });
    })
  };

  render() {
    return (
      <div>
        <Home />
        <Add />
        <p>{this.state.text}</p>
        <button onClick={this.sayHello}>Click</button>
      </div>
    );
  }
}

export default App;
