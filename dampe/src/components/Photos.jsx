import React, { Component } from "react";
import Menu from "./Menu.jsx";
import "../App.scss";
import SlideShow from "./SlideShow.jsx";
import Logo from "./Logo.jsx";

export default class Photos extends Component {
  state = {
    images: [
      { id: 1, src: require("../assets/img1.jpg") },
      { id: 2, src: require("../assets/img2.jpg") },
      { id: 3, src: require("../assets/img3.jpg") },
      { id: 4, src: require("../assets/img4.jpg") },
      { id: 5, src: require("../assets/img5.jpg") },
      { id: 6, src: require("../assets/img6.jpg") },
      { id: 7, src: require("../assets/img7.jpg") },
      { id: 8, src: require("../assets/img8.jpg") },
      { id: 9, src: require("../assets/img9.jpg") },
      { id: 10, src: require("../assets/img10.jpg") },
      { id: 11, src: require("../assets/img11.jpg") },
      { id: 12, src: require("../assets/img12.jpg") },
      { id: 14, src: require("../assets/img14.jpg") },
      { id: 15, src: require("../assets/img15.jpg") },
      { id: 16, src: require("../assets/img16.jpg") },
      { id: 17, src: require("../assets/img17.jpg") },
      { id: 18, src: require("../assets/img18.jpg") },
      { id: 19, src: require("../assets/img19.jpg") },
      { id: 20, src: require("../assets/img20.jpg") },
      { id: 21, src: require("../assets/img21.jpg") },
      { id: 23, src: require("../assets/img23.jpg") },
      { id: 24, src: require("../assets/img24.jpg") },
      { id: 25, src: require("../assets/img25.jpg") },
      { id: 26, src: require("../assets/img26.jpg") },
      { id: 27, src: require("../assets/img27.jpg") },
      { id: 28, src: require("../assets/img28.jpg") }
    ]
  };
  render() {
    return (
      <div className="gallery-container">
        <Logo />
        <SlideShow slides={this.state.images} keys={this.state} />
        <Menu />
      </div>
    );
  }
}
