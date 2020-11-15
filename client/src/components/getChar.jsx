import React, { Component } from "react";

export default class getChar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      char: "",
      type: "",
    };
  }


  render() {
    console.log("hello")
    // if (this.state.type === "string") {
      
      if (this.props.char === "\n") {
        return (
          <React.Fragment>
            <br></br>
          </React.Fragment>
        );
      } else if (this.props.char === "\t") {
        <React.Fragment>
          <span> "&nbsp;&nbsp;&nbsp;" </span>
        </React.Fragment>;
      } else if (this.props.char === " ") {
        <React.Fragment>
          <span className="char"> "&nbsp;" </span>
        </React.Fragment>;
      } else {
        <React.Fragment>
          <span className = "char"> {this.props.char} </span>
        </React.Fragment>;
      }
    }

  // }
}
