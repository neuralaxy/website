import React from "react";
import Vimeo from "@u-wave/react-vimeo";
import img1 from "../../../assets/images/Tutorial-3_Image-1.jpg";
import img2 from "../../../assets/images/Tutorial-3_Image-2.jpg";

import "./Tutorial3.style.css";

const Tutorial3 = () => {
  return (
    <>
      <h4>Communicating with Multiple NeuroStimDuinos on a Single I²C Bus</h4>
      <p>
        We will end this week’s update by demonstrating how to control two
        NeuroStimDuino using a single Arduino. The default I²C address for
        NeuroStimDuino is 26. Using the ADDR command from the NeuroStimDuino
        library, you can change this address and communicate with multiple
        devices on the same I²C bus. The syntax for ADDR command is{" "}
        <span className="highlight">ADDR new_address program/switch_only</span>,
        where:
        <ul>
          <li>
            <span className="highlight">new_address</span> can be any value
            between 8 to 119, and
          </li>
          <li>
            <span className="highlight">program/switch_only</span> is a binary
            value. When it is set to <span className="highlight">1</span>, the
            NeuroStimDuino's current address will be changed to{" "}
            <span className="highlight">new_address</span>, and the Arduino will
            start sending I²C messages to that address. When{" "}
            <span className="highlight">program/switch_only</span> is set to{" "}
            <span className="highlight">0</span>, NeuroStimDuino's current
            address will not be changed. Only the peripheral address stored
            within Arduino will be updated so that it can start communicating
            with a different peripheral device.
          </li>
        </ul>
      </p>
      <h4>
        Setup for Changing I²C Address & Connecting Multiple NeuroStimDuinos
      </h4>
      <ol>
        <li>
          Connect the first NeuroStimDuino to an Arduino:
          <img
            src={img1}
            onClick={() =>
              window.open(`${img1}`, "_blank", "noopener, noreferrer")
            }
            alt=""
          />
        </li>
        <li>
          Change its I²C address from 26 (default) to any other value (e.g. 30)
          using the serial terminal:
          <br />
          <div className="code-segment">ADDR 30 1</div>
        </li>
        <li>
          Now stack the second NeuroStimDuino on top of the first. Use the
          default I²C address for the second device or change it using the
          instructions in Step 2:
          <img
            src={img2}
            onClick={() =>
              window.open(`${img2}`, "_blank", "noopener, noreferrer")
            }
            alt=""
          />
        </li>
        <li>
          You are now ready to independently control both NeuroStimDuinos.
        </li>
        <li>
          Type in the following command using Arduino’s serial terminal to
          stimulate two Zucchini muscles (video below):
          <br />
          <div className="code-segment">
            ADDR 30 1
            <br />
            FREQ 1 15
            <br />
            FREQ 2 15
            <br />
            DURN 1 2000
            <br />
            DURN 2 2000
            <br />
            AMPL 1 100
            <br />
            AMPL 2 100
            <br />
            DELY 1 5
            <br />
            DELY 2 10
            <br />
            ENAB 1 1
            <br />
            ENAB 2 1
            <br />
            STIM 1 0 1
            <br />
            STIM 2 0 1
            <br />
            ADDR 26 0 &nbsp; &nbsp; &nbsp; &nbsp; // Connect 2nd NeuroStimDuino
            and start communicating with it. Address will not be changed
            <br />
            FREQ 1 5
            <br />
            FREQ 2 5
            <br />
            DURN 1 2000
            <br />
            DURN 2 2000
            <br />
            AMPL 1 100
            <br />
            AMPL 2 100
            <br />
            DELY 1 5
            <br />
            DELY 2 10
            <br />
            ENAB 1 1
            <br />
            ENAB 2 1
            <br />
            STIM 1 0 1
            <br />
            STIM 2 0 1 &nbsp; &nbsp; &nbsp; &nbsp; // At the end of the
            experiment stop stimulation on both boards
            <br />
            STOP 1
            <br />
            STOP 2
            <br />
            ADDR 30 0 &nbsp; &nbsp; &nbsp; &nbsp; // Switch communication to 1st
            device
            <br />
            STOP 1
            <br />
            STOP 2
          </div>
        </li>
      </ol>
      <div className="video-player">
        <Vimeo
          className="tutorial-video"
          video="https://player.vimeo.com/video/542732824?h=4983df76a0"
          autoplay={false}
          responsive
        />
      </div>
    </>
  );
};

export default Tutorial3;
