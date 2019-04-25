import React, { Component } from "react";
import "../App.scss";
import Logo from "./Logo.jsx";
import Menu from "./Menu.jsx";
import Video360 from "./Video360.jsx";
// import Promo from "./PromoVideo.jsx";

export default class Process extends Component {
  constructor() {
    super();
    this.state = {};
  }
  handleDelete = (linkId, clicked) => {
    this.setState({ clicked: true });
    console.log("Event Handler Called", linkId, clicked);
  };

  render() {
    return (
      <div className="process">
        <Logo />
        <h1 className="presents">This is how we created the Dampe`s Map</h1>
        <Video360 />
        <Menu />
      </div>
    );
  }
}
