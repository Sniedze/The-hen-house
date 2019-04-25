import React, { Component } from "react";
import Henhouselogo from "../assets/henhouselogo.png";

export default class Logo extends Component {
  render() {
    return (
      <div className="logo">
        <img
          className="logoImage"
          src={Henhouselogo}
          alt={"Hen in the house"}
        />
        <h3 className="logoText">Henhouse Studios</h3>
      </div>
    );
  }
}
