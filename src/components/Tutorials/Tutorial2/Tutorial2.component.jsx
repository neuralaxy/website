import React from "react";
import img1 from "../../../assets/images/Tutorial-2_Image-1.png";
import img2 from "../../../assets/images/Tutorial-2_Image-2.jpg";
import img3 from "../../../assets/images/Tutorial-2_Image-3.jpg";
import img4 from "../../../assets/images/Tutorial-2_Image-4.png";
import img5 from "../../../assets/images/Tutorial-2_Image-5.png";

import "./Tutorial2.style.css";

const Tutorial2 = () => {
  return (
    <>
      <h4>Tips on Electrode Placement and Muscle Mapping</h4>
      <p>
        This tutorial will share tips on how to place the hydrogel electrodes on
        the surface of the skin in order to stimulate underlying muscles. These
        tips will be helpful not just when using NeuroStimDuino, but for any
        neurostimulator. But first, let's review some{" "}
        <b>important safety guidelines:</b>
      </p>
      <ul>
        <li>
          NeuroStimDuino is not an FDA approved product for clinical use and it
          is intended for <b>RESEARCH PURPOSES ONLY</b>.
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
          operate. We <b>strongly</b> recommend to use an external battery for
          this and avoid the use of an AC adapter or anything that's plugged
          into the AC mains
        </li>
      </ul>
      <p>
        In case you are wondering, how exactly are you suppose to learn to apply
        neurostimulation if you can't use it without getting all the approvals,
        you are not alone. You could use a frog or a cockroach for your
        experiments and BackyardBrains has provided a great article on how to do
        this in{" "}
        <a
          href="https://backyardbrains.com/experiments/Galvani_Volta"
          target="_blank"
          rel="noreferrer"
        >
          humane way
        </a>
        . (Scroll all the way to the video at the bottom to see how a
        cockroach's leg twitches under electricity.) However, if you still don't
        want to mess with a cockroach or want a completely humane way to do your
        experiments, check out our tips on safely exploring neurostimulation
        using just{" "}
        <a
          href="https://www.crowdsupply.com/neuralaxy/neurostimduino/updates/tips-on-electrode-placement"
          target="_blank"
          rel="noreferrer"
        >
          Zucchinis
        </a>
      </p>
      <p>
        If you have already <b>received approval</b> from your ethics committee
        and ready to start stimulating human muscles, then lets dive into it.
        You will probably recall from one of the demo videos, how by using 3
        electrodes on the forearm and 1 on the palm, I was able to implement a
        cylindrical grasp and hold a cup
      </p>
      <img src={img1} alt="" />
      <p>
        Today, I will share tips on how to map muscles of the hand, so that you
        know where exactly to attach the hydrogel electrodes onto the skin.
        These tips will be helpful not just when using NeuroStimDuino, but for
        any neurostimulator. First, lets review some anatomy of the hand.
      </p>
      <img src={img2} alt="" />
      <h4>Review Anatomy of Hand Flexors and Extensors</h4>
      <p>
        To generate finger flexion or extension, we need to stimulate the flexor
        digitorum superficialis and extensor digitorum muscles, as highlighted
        above. The flexor digitorum superficialis muscle is slightly deeper and
        lies beneath a pair of flexor carpi muscles that control wrist movement.
        Therefore, targeting the finger flexors can be tricky and you might
        inadvertently cause the wrist to flex as well. However, by using
        electrodes that are not too big and by placing them appropriately as
        well as keeping the stimulation amplitude low, you should still be able
        to flex all the fingers. Also, the extensors are bunched together and
        are near the skin surface. Hence, they can be simultaneously activated
        using one electrode placed on the back of the forearm. Note that in the
        first figure, I additionally placed a small round electrode near the
        base of the thumb. This electrode was working in parallel with the
        finger flexor electrode by using cable splitters on channel 1, so as to
        get stronger thumb flexion as well.
      </p>
      <h4>Sourcing and Sinking Current through a Muscle</h4>
      <img src={img3} alt="" />
      <p>
        The above sketch is a rough diagram of how neurostimulation works. You
        can imagine the stimulator (e.g. NeuroStimDuino) to behave as two
        constant current sources connected in series. Each current source is
        powered by a high voltage source (i.e +/-72V) so that it can drive
        several milliamps of current through the skin surface (a.k.a compliance
        voltage). The top current source is active during the positive or anodic
        phase of the stimulation pulse (shown by <b>pink</b> marker). The bottom
        current sink is active during the negative or cathodic phase of the
        stimulation pulse (shown by <b>green</b> marker). The current is sourced
        or sink from the muscles using the hydrogel electrodes placed on the
        skin surface. One electrode is placed over the muscle belly (a.k.a
        **Working Electrode**) and acts as the main entry or exit point for
        current. A second electrode is placed at the tail end of the muscle
        (a.k.a **Return Electrode**), where it connects to the stimulator
        ground, completing the return path for the current.
      </p>
      <h4>Use a single "Return" electrode when using multiple channels</h4>
      <p>
        The ground connection is common for all the stimulation channels. So, if
        you are using multiple stimulation channels, you only need to connect
        one return electrode. If you are stimulating both the finger flexors and
        extensors, then we recommend placing the return electrode on the lateral
        side of the wrist (as shown in the topmost figure). If you are
        stimulating only the flexors, then you can place the return electrode on
        the median side of the wrist (as shown in below figure).
      </p>
      <h4>Waveform Parameters</h4>
      <p>
        In the above white-board figure, the waveform is defined by specifying
        parameters such as amplitude (AMPL), pulse duration (DURN), pulse
        frequency (FREQ), and inter-phase delay (IDLY). For the cup lifting
        experiment, we set these values as AMPL = 15mA, DURN = 500usec, FREQ =
        30Hz, IDLY = 200usec. Kindly refer to the I2C library for an explanation
        of these terms.
      </p>
      <h4>Mapping Muscle Location using a Handheld Probe</h4>
      <p>
        When you first start placing electrodes on the arm, it can be
        frustrating to know where exactly to place the electrodes. You can refer
        to the anatomy and try to feel the contraction of your muscles, but what
        definitely works is to use a stimulation probe for this purpose. There
        are some commercially available TENS probes, also called ball-point pen
        probes. I found a simple and cheap way to make my own. I used a 1" round
        electrode, some tape, borrowed my son's percussion stick, and Voila! my
        handheld mapping probe was ready.
      </p>
      <img src={img4} alt="" />
      <h4>Steps to map Muscle Location using Handheld Probe</h4>
      <ol>
        <li>
          Connect the <b>red</b> lead wire of the channel output to the probe
          and connect the <b>black</b> lead wire to a return electrode placed on
          the wrist.
        </li>
        <li>
          Program the NeuroStimDuino to continuously generate stim. pulses at a
          moderately high intensity (_to be covered in more detail in an
          upcoming update_).
        </li>
        <li>
          Touch the surface of the skin with the probe. Try moving it around by
          few centimeters and you should be able to start seeing your fingers
          slightly move.
        </li>
        <li>
          With some patience and practise, I was be able to isolate individual
          finger movements as shown below.
        </li>
        <li>
          Once you have the index, middle and ring or pinky mapped out, place a
          large square electrode such that it encompasses most of the mapped
          sites (as shown in the topmost figure)
        </li>
        <li>
          Repeat the same procedure for mapping the extensor muscle locations.
        </li>
      </ol>
      <img src={img5} alt="" />
      <h4>Additional Resources</h4>
      <p>
        If you are interested in further instructions and video tutorials on the
        placement of stimulation electrodes to evoke various hand and leg
        movements, please refer to{" "}
        <a
          href="https://www.axelgaard.com/Education"
          target="_blank"
          rel="noreferrer"
        >
          Electrode Placement & Functional Movement
        </a>
        , courtesy of Dr. Lucinda Baker, Associate Professor (retired) at the
        University of Southern California and Axelgaard Manufacturing Co., Ltd.
      </p>
    </>
  );
};

export default Tutorial2;
