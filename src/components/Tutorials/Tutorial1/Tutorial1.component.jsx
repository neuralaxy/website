import React from "react";
import img1 from "../../../assets/images/Tutorial-1_Image-1.png";
import img2 from "../../../assets/images/Tutorial-1_Image-2.png";
import img3 from "../../../assets/images/Tutorial-1_Image-3.jpg";
import img4 from "../../../assets/images/Tutorial-1_Image-4.jpg";
import img5 from "../../../assets/images/Tutorial-1_Image-5.jpg";
import img6 from "../../../assets/images/Tutorial-1_Image-6.png";
import img7 from "../../../assets/images/Tutorial-1_Image-7.jpg";
import img8 from "../../../assets/images/Tutorial-1_Image-8.jpg";
import img9 from "../../../assets/images/Tutorial-1_Image-9.png";
import img10 from "../../../assets/images/Tutorial-1_Image-10.jpg";

import "./Tutorial1.style.css";

const Tutorial1 = () => {
  return (
    <>
      <ul>
        <li>
          To get started, first and foremost familiarize yourself with
          NeuroStimDuino features, board layout and pin diagram.
        </li>
        <li>
          If you just ordered the NeuroStimDuino board (without the accessory
          pack), then you will have received the following components.
          <br />
          <img src={img1} alt="" />
        </li>
        <li>
          If you have ordered the accessory pack as well, then you will also
          receive hydrogel electrodes and extra cables (seen below). The
          hydrogel electrodes are required if you plan to stimulate a fake
          muscle (such as a Zucchini) or for your research.
          <br />
          <img src={img2} alt="" />
        </li>
        <li>
          Finally, before you begin, please remember to review the safety
          guidelines listed at the end of this tutorial and follow the
          recommendations mentioned therein.
        </li>
      </ul>
      <h4>Hardware Setup</h4>
      <ul>
        <li>
          The battery holder included requires two 18650 Li-ion batteries (not
          included) to be connected in series. The battery holder allows the
          batteries to be oriented in series or parallel connection.
          Unfortunately, the battery holders we shipped only have Chinese labels
          to indicate the series or parallel oritentation. Make sure you connect
          the batteries in series (as shown below) and not in parallel.
          Alternately, you can power NeuroStimDuino using your own battery
          source between 6-20V. We do not recommend powering NeuroStimDuino
          using an AC-DC adapter. However, if you must use an adapter, then you
          need an adapter with atleast 2 Amps output rating.
          <br />
          <img src={img3} alt="" />
        </li>
        <li>
          For connecting the stimulation cables, you will have to remove the
          cable shroud or sheath cover as shown below and then plug it into the
          0.7mm DC Jack.
          <br />
          <img src={img4} alt="" />
        </li>
        <li>
          Ensure the jumper settings for selecting the shape of the current
          waveforms are set to "x1" or Symmetrical, as shown below.
          <br />
          <img src={img5} alt="" />
        </li>
        <li>
          The High-Voltage Power Switch S3 turns ON/OFF the +/-72V DC-DC
          converter (NMT0572SC). When using NeuroStimDuino for the first time we
          recommend starting with the switch in OFF position. Afterwards, once
          you are ready to stimulate then flip the switch ON. That way even if
          you accidentally turn ON the stimulation, it will not have any effect
          because the high-voltage source will be OFF. Plus it will also help
          extend battery life.
          <br />
          <img src={img6} alt="" />
        </li>
        <li>
          To control NeuroStimDuino using an Arduino Due or Mega, stack
          NeuroStimDuino on top of the Arduino board by aligning the hearder
          pins, as shown below.
          <br />
          <img src={img7} alt="" />
        </li>
        <li>
          Once the hardware setup is complete, the amber or yellow Emergency-OFF
          LED will remain continuously ON. Also TEST_LED1 and TEST_LED2 will
          start blinking at a rate of 10 Hz
          <br />
          <img src={img8} alt="" />
        </li>
      </ul>
      <h4>Software Setup</h4>
      <ul>
        <li>
          Next, you will need to download the latest version of our Arduino
          library. Read the full update here and remember to install the
          [SerialCommands library]
          (https://github.com/ppedro74/Arduino-SerialCommands) from Pedro
          Pereira. Next, upload the example code
          NeuroStimDuino_SerialControl.ino onto the Arduino.
        </li>
        <li>
          To write instructions to control NeuroStimDuino, you will use the
          Serial terminal that is in-built Arduino IDE (Tools &gt; Serial
          Monitor). Once you open the Serial Monitor, set the baudrate to 115200
          bps and add "CR+LF" at the end of each command. When you power either
          the Arduino or NeuroStimDuino board via the DC plug, you will see test
          LEDs 1 & 2 flashing on the NeuroStimDuino board. These LEDs are
          flashing with the default stimulation frequency of 10Hz. Now you can
          enter some example commands into the Serial Monitor, one command at a
          time and then press enter.
        </li>
        <li>
          After uploading the example code NeuroStimDuino_SerialControl.ino and
          making the connections as above, when you first open the Serial
          terminal you will see the following welcome message. This mean that a
          successful connection between Arduino and NeuroStimDuino has been
          established. It will also give a readout of the current stimulation
          parameters for each channel.
          <br />
          <img src={img9} alt="" />
        </li>
        <li>
          You can type in some example commands into Serial Monitor and change
          the settings for the stimulator (type one statement at a time). Also,
          the commands are case-sensitive, so type it in all caps.
        </li>
      </ul>
      <h4>Moving Forward</h4>
      <ul>
        <li>
          This completes this introductory tutorial. From here on, if you would
          like to connect cables and electrodes and actuatlly stimulate a fake
          Zucchini muscle, then follow the setup instructions shown in our April
          Update published on CrowdSupply.
        </li>
        <li>
          If you want connect multiple NeuroStimDuinos together and control them
          using a single Arduino, then look up the steps and instructions posted
          earlier.
          <br />
          One important change required in hardware when stacking 2 or more
          NeuroStimDuinos is to disconnect pins 5 & 6 on JP3. Another way to
          identify these pins is that they normally connect with PWM pins 9 and
          10 on Arduino Due or Mega. The reason for this is that these pins can
          also be used to drive TEST_LED1 and TEST_LED2 of NeuroStimDuino.
          Therefore, if you connect them together on 2 NeuroStimDuinos, the LEDs
          will not function properly and can be confusing. Hence, to avoid any
          cross-talk, its best to fold these pins out of the way as shown below.
          <br />
          <img src={img10} alt="" />
        </li>
        <li>
          We hope you enjoy tinkering with NeuroStimDuino and use it for all
          your neuroscience experiments. If you face any issue with the device
          or are stuck anytime, feel free to write to us on{" "}
          <a href="mailto:contactus@neuralaxy.com">contactus@neuralaxy.com</a>{" "}
          or submit an issue here.
        </li>
      </ul>
      <h4>Important Safety Guidelines</h4>
      <ul>
        <li>
          NeuroStimDuino is not an FDA approved product for clinical use and it
          is intended for RESEARCH PURPOSES ONLY.
        </li>
        <li>
          NeuroStimDuino is not intended for human use or animal use, without
          receiving prior approval from a local ethics committee such as
          Institutional Review Boards and Institutional Animal Care and Use
          Committees
        </li>
        <li>
          Under no circumstances, should the stimulation electrodes be placed
          across the chest or close to the heart
        </li>
        <li>
          NeuroStimDuino requires an external DC input voltage from 6-20V to
          operate. We strongly recommend to use an external battery for this and
          avoid the use of an AC adapter or anything that's plugged into the AC
          mains
        </li>
      </ul>
    </>
  );
};

export default Tutorial1;
