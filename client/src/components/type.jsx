import React, { Component } from "react";
import GetChar from "./getChar";
import pause from "../utils/pause";
import TypeIt from "typeit-react";

export default class type extends Component {
  constructor(props) {
    super(props);
    this.state = {
      class: [],
      class2: [],
      class3: [],
      html: "",
      interval: "",
    };
  }

  // getChar(char) {
  //   if (char === "\n") {
  //     return (
  //       <React.Fragment>
  //         <br></br>
  //       </React.Fragment>
  //     );
  //   } else if (char === "\t") {
  //     <React.Fragment>
  //       <span> "&nbsp;&nbsp;&nbsp;" </span>
  //     </React.Fragment>;
  //   } else if (char === " ") {
  //     <React.Fragment>
  //       <span className="char"> "&nbsp;" </span>
  //     </React.Fragment>;
  //   } else {
  //     <React.Fragment>
  //       <span className="char"> {char} </span>
  //     </React.Fragment>;
  //   }
  // }

  // sequence() {
  //   let prev;
  //   let queue;
  //   let interval;
  //   let text;
  //   let allText = "";

  //   if (Array.isArray(this.props.text)) {
  //     text = this.props.text.join("\n");
  //   }
  //   queue = text.split("");

  //   interval = setInterval(async () => {
  //     await pause(1000 / 1000);

  //     if (queue.length) {
  //       let char = queue.shift();

  //       let element = char;
  //       if (element) {
  //         allText += element;
  //         this.setState({
  //           ...this.state,
  //           html: allText,
  //         });
  //       }
  //     } else {
  //       clearInterval(interval);
  //       await pause(500 / 1000);
  //     }
  //   }, 50);
  // }

  componentDidMount() {
    console.log("hello");
  }

  render() {
    // this.sequence()
    console.log(this.state.html);
    return (
      <div className="typer">
        <TypeIt
        
          options={{
            strings: this.props.text,
            speed: 50,
            lifeLike: true,
            startDelay: 0,
            cursorChar: "■"
          }}
        ></TypeIt>
      </div>
    );
  }
}
