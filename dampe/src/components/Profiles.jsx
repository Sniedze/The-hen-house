import React from "react";
import Yolanda from "../assets/yolanda.png";
import Ulrika from "../assets/ulrika.png";
import Simon from "../assets/simon.png";
import Sean from "../assets/sean.png";
import Rytis from "../assets/rytis.png";
import Luis from "../assets/luis.png";
import Jens from "../assets/jens.png";

export default class Profiles extends React.Component {
  render() {
    return (
      <div className="profiles">
        <div id="yolanda" className="profile">
          <img src={Yolanda} alt="" />
          <h3>
            Yolanda lent her impressive graphic design skills to “Dampe’s Map”
            and proved to be an invaluable member of the team. An unwavering fan
            of siestas, Yolanda is a proud Spaniard who knows how to live.
          </h3>
        </div>
        <div id="ulrika" className="profile">
          <img src={Ulrika} alt="" />
          <h3>
            Ulrika not only built this website but also provided invaluable
            insight during the creation and development process of this app.
            Often the voice of reason, Ulrika made her native Latvia proud
            during this project.
          </h3>
        </div>
        <div id="simon" className="profile">
          <img src={Simon} alt="" />
          <h3>
            Simon hails from Copenhagen and blessed this project with his
            development skills. His sarcastic wit is only matched by his love
            for herring.
          </h3>
        </div>
        <div id="sean" className="profile">
          <img src={Sean} alt="" />
          <h3>
            Sean oversaw the project management of Dampe’s Map. A fan of
            teamwork and creativity, Sean was right at home during the
            development of this app. His official home is a country called
            Canada.
          </h3>
        </div>
        <div id="rytis" className="profile">
          <img src={Rytis} alt="" />
          <h3>
            Rytis is a Lithuanian ray of sunshine who created the interactive
            360° experiences within this app among other things. He is a skilled
            technical problem solver who never says die.
          </h3>
        </div>
        <div id="luis" className="profile">
          <img src={Luis} alt="" />
          <h3>
            Luis took this project by the horns and put an endless amount of
            elbow grease into the development of “Dampe’s Map”. Originally from
            the Faroe Islands, Luis now calls Denmark home
          </h3>
        </div>
        <div id="jens" className="profile">
          <img src={Jens} alt="" />
          <h3>
            Jens is a Danish Swede or a Swedish Dane. An inexhaustible source of
            energy, Jens lent his talents to many areas of this app, including
            design, development, and content creation.
          </h3>
        </div>
      </div>
    );
  }
}
