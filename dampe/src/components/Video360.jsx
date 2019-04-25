import React, { Component } from "react";
import Swan from "../assets/SmallTower.jpg";

export default class Video360 extends Component {
  render() {
    return (
      <div
        className="video"
        style={{
          position: "relative",
          paddingBottom: "50%" /* 16:9 */,
          paddingTop: 0,
          height: 0
        }}
      >
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Hg1z8jJhw9Q"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen="allowFullScreen"
          poster={Swan}
        />
        <h3>
          Hen House Studios journeyed to little Christiansø to create "Dampe’s
          Map". View this 360° video to follow along with them and learn more
          about how this augmented reality app was made.
        </h3>
      </div>
    );
  }
}
