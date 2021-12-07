import React from "react";
import img3 from "../../../assets/images/NeuroStimDuino_Components.png";

import "./BoardLayout.style.css";

const BoardLayout = () => {
  return (
    <>
      <h3>Board Layout</h3>
      <br />
      <div className="img-container">
        <img src={img3} className="board-img" alt="" />
      </div>
    </>
  );
};

export default BoardLayout;
