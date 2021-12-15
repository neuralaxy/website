import React from "react";
import img1 from "../../../assets/images/Neurostimduino-angle-02.png";
import Vimeo from "@u-wave/react-vimeo";

import "./Description.style.css";

const Description = () => {
  return (
    <>
      <div className="video-player">
        <Vimeo
          className="video"
          video="https://player.vimeo.com/video/522539924?h=457ae7e579"
          autoplay={false}
          responsive
        />
      </div>
      Neurostimulation is the application of short electrical pulses to the
      surface of the skin for the purpose of stimulating the underlying nerves
      and muscles. In recent decades, neurostimulation has been used as part of
      a treatment called Functional Electrical Stimulation (FES) therapy to help
      restore mobility in the paralyzed limb muscles of stroke victims and those
      who have suffered spinal cord injuries. While carrying out research in
      areas such as pain reduction and sensory feedback, scientists have also
      used neurostimulation to study the effect of electrical current on
      neurons.
      <br />
      <br />
      Historically, the delivery of neurostimulation has required the purchase
      of expensive, research-grade equipment or the expensive, time-consuming
      construction of custom hardware. NeuroStimDuino provides an open-source
      alternative in the form of an Arduino shield.
      <br />
      <br />
      <h4>Affordable, Accessible, and Easy to Use</h4>
      NeuroStimDuino was designed to help anyone with an interest in
      neuroscience—students, researchers, and hobbyists alike—to study the
      effects of neurostimulation on muscle contraction. It comes with an I²C
      interface through which external microcontroller boards like the Arduino
      Due can be used to generate different stimulation patterns and control
      other aspects of its operation. Each NeuroStimDuino shield has two
      independent output channels, which can be used to alternate the
      contraction of flexor and extensor muscles or to contract various muscles
      simultaneously. By stacking multiple shields, additional output channels
      can be made available.
      <br />
      <br />
      <i>
        <b>Note:</b> A single output channel on NeuroStimDuino is capped at 20
        mA, which is sufficient to contract small muscles but insufficient to
        contract large ones. Large muscles can be contracted by combining the
        two output channels of NeuroStimDuinos in parallel.
      </i>
      <br />
      <br />
      <div className="img-container">
        <img
          src={img1}
          onClick={() =>
            window.open(`${img1}`, "_blank", "noopener, noreferrer")
          }
          alt=""
        />
      </div>
      <br />
      <br />
      <h4>Opens the Door to Many Different Areas of Research</h4>
      NeuroStimDuino is a platform technology with many possible applications.
      It can be used to conduct research on how neurostimulation affects pain
      management and the restoration of mobility to paralyzed extremities. It
      can also provide sensory feedback to amputees and stimulate the
      transcutaneous vagus nerve to study the effects of neurostimulation on
      depression, arthritis, and other conditions.
      <br />
      <br />
      <i>
        <b>WARNING:</b> This instrument is intended for RESEARCH PURPOSES ONLY.
        It is not intended for human or animal use. Neuralaxy LLC does not
        assume responsibility for injury or damage due to the misuse of this
        instrument.
      </i>
    </>
  );
};

export default Description;
