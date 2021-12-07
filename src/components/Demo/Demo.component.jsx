import React from "react";
// import Vimeo from "@u-wave/react-vimeo";
import demo1 from "../../assets/videos/NeuroStimDuino_Demo_final.mp4";

import "./Demo.style.css";

const Demo = () => {
  return (
    <section id="demo">
      <div className="container">
        <div className="demo-container">
          <h3 className="heading">
            Here you will find demos of NeuroStimDuino in action
          </h3>
          <div className="demo-video">
            <video controls>
              <source src={demo1} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
