import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const style = {
  margin: "10px auto",
  maxWidth: "90%",
  button: {
    backgroundColor: "#777"
  }
}
export default class Add extends React.Component {

  handleClick = () => {
    alert("hello");
  }

  render() {
    return (
      <div>
        <h1>Add Page</h1>
        <form>
          <input style={style} className="form-control" name="title" type="text" placeholder="Title" />
          <input style={style} className="form-control" name="category" type="text" placeholder="Category" />
          <textarea style={style} className="form-control" name="body" type="text" placeholder="Body" />
          <Button style={style.button} onClick={this.handleClick}>Post</Button>
        </form>
      </div>
    );
  }
}
