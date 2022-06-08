import React from "react";
import ICoordinateLogo from "../../assets/Companies/icoordinatewhite.png";
import SevenEhvenLogo from "../../assets/Companies/white.png";
import HeroComp from "../util/HeroComp";
const WorkedWithComp = () => {
  return (
    <div className="workedWith__Section">
      <div className="tileHead">
        <h1>Patnership</h1>
      </div>
      <div className="brandsLogos">
        <div
          className="brandsName__Container3DH"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <h1>GoLoak</h1>
          {/* <img src={ICoordinateLogo} alt="ICoordinateLogo" /> */}
        </div>
        <div
          className="brandsName__Container"
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          <h1>Greenpeace</h1>
        </div>
        <div
          className="brandsImg2__Container"
          data-aos="zoom-in"
          data-aos-delay="700"
        >
          <img src={SevenEhvenLogo} alt="SevenEhvenLogo" />
        </div>
      </div>
    </div>
  );
};

export default WorkedWithComp;
