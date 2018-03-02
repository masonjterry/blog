import React from "react";
import { Link } from "react-router-dom";

export default class Add extends React.Component {
  render() {
    return (
      <div>
        <h1>Add Page</h1>
        <Link to="/">Home</Link>
      </div>
    );
  }
}
