import React, { Component } from "react";
import "../App.scss";
import Logo from "./Logo.jsx";
import Promo from "./PromoVideo.jsx";
import Menu from "./Menu.jsx";

export default class App extends Component {
  render() {
    return (
      <div className="home">
        <Logo />
        <h1 className="presents">presents</h1>
        <Promo />
        <Menu />
      </div>
    );
  }
}
