import React, { Component } from "react";
import { Player } from "video-react";

import PromoVideo from "../assets/PromoVideoNot360.mp4";
import Swan from "../assets/img9.jpg";

export default class Promo extends Component {
  render() {
    let properties = Player.props;
    return (
      <video
        data={properties}
        playsInline
        poster={Swan}
        src={PromoVideo}
        id="promo-video"
        preload="none"
        // onClick="this.paused?this.play():this.pause();"
        controls
      />
    );
  }
}
// export default props => {
//   return <Player playsInline poster={Swan} src={PromoVideo} />;
// };
