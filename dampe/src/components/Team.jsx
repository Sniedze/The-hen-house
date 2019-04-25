import React, { Component } from "react";
import "../App.scss";
import Logo from "./Logo.jsx";
import Menu from "./Menu.jsx";
import Profiles from "./Profiles.jsx";

// import Promo from "./PromoVideo.jsx";

export default class Team extends Component {
  render() {
    return (
      <div className="team">
        <Logo />
        <h1> Meet the creators of the Dampe`s Map</h1>
        <Profiles />
        <Menu />
      </div>
    );
  }
}
