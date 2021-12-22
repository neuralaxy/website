import React from "react";
import img1 from "../../../assets/images/partners1.jpeg";
import img2 from "../../../assets/images/partners2.jpeg";

import "./Partners.style.css";

const Partners = () => {
  return (
    <>
      <h1>Our Partners</h1>
      <div className="partners-box">
        <div className="partners-img">
          <img src={img1} alt="" className="img1" />
        </div>
        <div className="partners-img">
          <img src={img2} alt="" className="img2" />
        </div>
      </div>
    </>
  );
};

export default Partners;
