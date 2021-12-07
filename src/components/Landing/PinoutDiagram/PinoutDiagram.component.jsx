import React from "react";
import img4 from "../../../assets/images/NeuroStimDuino_Pinout_Diagram.png";

import "./PinoutDiagram.style.css";

const PinoutDiagram = () => {
  return (
    <>
      <h3>Pinout Diagram</h3>
      <br />
      <div className="img-container">
        <img src={img4} className="pinout-img" alt="" />
      </div>
    </>
  );
};

export default PinoutDiagram;
