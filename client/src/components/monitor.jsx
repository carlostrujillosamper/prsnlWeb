import React, { Component } from "react";
import TypeIt from "typeit-react";

import "../style/style.css";
import Type from "./type";

export default class monitor extends Component {
  constructor() {
    super();

    this.state = {
      text: [],
      ctr: "off",
      toggle: false,
      slider: "off",
      switch: true,
    };
  }

  turnOnOff = () => {
    console.log(this.state);
    !this.state.toggle
      ? this.setState({
          ...this.state,
          ctr: "on",
          toggle: true,
          switch: false,
          slider: "on",
          text: [
            "Welcome to ECMA industries(TM) terminal",
            " ",
            "> SET TERMINAL/BOOT",
            "Loading........................",
            "Please wait........",
            "..........",
            "...",
            ".",
            "OK.",
            " ",
            "> SET TERMINAL/LOGON",
            "USER AUTHENTICATION CHECK",
          ],
        })
      : this.setState({
          ...this.state,
          ctr: "off",
          toggle: false,
          switch: true,
          slider: "off",
          text: [],
        });
  };

  componentDidMount() {}

  render() {
    console.log(this.state.text);
    return (
      <div>
        <div id="monitor">
          <div id="screen">
            <div
              id="crt"
              className={this.state.ctr}
              onClick={(e) => this.turnOnOff(e)}
            >
              <div className="scanline"></div>
              <div className="terminal">
                <Type text={this.state.text}></Type>
              </div>
            </div>
          </div>

          <div id="slider" className={this.state.slider}>
            <label className="switch">
              <input type="checkbox" onClick={(e) => this.turnOnOff(e)} />
              <span className="slider"></span>
            </label>
          </div>

          <div id="controls">
            <div id="power">
              <label className="rocker rocker-small">
                <input
                  id="switch"
                  type="checkbox"
                  onClick={(e) => this.turnOnOff(e)}
                  checked={this.state.switch}
                />
                <span className="switch-left">O</span>
                <span className="switch-right">I</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
