import React from "react";
import SampleImg1 from "../../assets/images/sample_img.jpg";
import SampleImg2 from "../../assets/images/sample_img2.jpg";

import "./Landing.style.css";

const Landing = () => {
    return (
        <section id="landing">
            <div className="container">
                <div className="heading">
                    <h1>NeuroStimDuino</h1>
                    <span>by Neuralaxy</span>
                </div>
                <div className="desc">
                    <h4>
                        An open source neurostimulator for students, researchers, 
                        and hobbyists interested in neuroscience
                    </h4>
                </div>
                <div className="product-container">
                    <div className="product-desc">
                        <p>
                            Neurostimulation is the application of short electrical 
                            pulses to the surface of the skin for the purpose of 
                            stimulating the underlying nerves and muscles. In recent 
                            decades, neurostimulation has been used as part of a 
                            treatment called Functional Electrical Stimulation (FES) 
                            therapy to help restore mobility in the paralyzed limb 
                            muscles of stroke victims and those who have suffered 
                            spinal cord injuries. While carrying out research in areas 
                            such as pain reduction and sensory feedback, scientists 
                            have also used neurostimulation to study the effect of 
                            electrical current on neurons.
                            <br /><br />
                            Historically, the delivery of neurostimulation has required 
                            the purchase of expensive, research-grade equipment or the 
                            expensive, time-consuming construction of custom hardware. 
                            NeuroStimDuino provides an open-source alternative in the 
                            form of an Arduino shield.
                            <br /><br />
                            <h4>Affordable, Accessible, and Easy to Use</h4>
                            NeuroStimDuino was designed to help anyone with an interest 
                            in neuroscience—students, researchers, and hobbyists alike—to 
                            study the effects of neurostimulation on muscle contraction. 
                            It comes with an I²C interface through which external 
                            microcontroller boards like the Arduino Due can be used to 
                            generate different stimulation patterns and control other 
                            aspects of its operation. Each NeuroStimDuino shield has two 
                            independent output channels, which can be used to alternate 
                            the contraction of flexor and extensor muscles or to contract 
                            various muscles simultaneously. By stacking multiple shields, 
                            additional output channels can be made available.
                            <br /><br />
                            <i>
                                <b>Note:</b>
                                {" "}A single output channel on NeuroStimDuino is capped at 
                                25 mA, which is sufficient to contract small muscles but 
                                insufficient to contract large ones. Large muscles can be 
                                contracted by combining the two output channels of NeuroStimDuinos 
                                in parallel.
                            </i>
                            <br /><br />
                            <img src={SampleImg1} alt="" />
                            <br /><br />
                            <h4>Opens the Door to Many Different Areas of Research</h4>
                            NeuroStimDuino is a platform technology with many possible 
                            applications. It can be used to conduct research on how 
                            neurostimulation affects pain management and the restoration 
                            of mobility to paralyzed extremities. It can also provide 
                            sensory feedback to amputees and stimulate the transcutaneous 
                            vagus nerve to study the effects of neurostimulation on 
                            depression, arthritis, and other conditions.
                            <br /><br />
                            <i>
                                <b>WARNING:</b>
                                {" "}This instrument is intended for RESEARCH PURPOSES 
                                ONLY. It is not intended for human or animal use. Neuralaxy 
                                LLC does not assume responsibility for injury or damage due 
                                to the misuse of this instrument.
                            </i>
                            <br /><br />
                            <h3>Features</h3>
                            <ul>
                                <li>
                                    Generates biphasic, rectangular, and constant current 
                                    stimulation pulses with programmable frequency, 
                                    pulse-width, and amplitude
                                </li>
                                <li>
                                    Stimulation pulses are charge-balanced, consisting of a 
                                    cathodic phase followed by an anodic phase of equal or 
                                    unequal amplitudes (i.e. the waveform shape can be 
                                    symmetrical or asymmetrical)
                                </li>
                                <li>
                                    Can be configured over I²C, from an external microcontroller 
                                    acting as the controller
                                </li>
                                <li>
                                    Can be used as an Arduino shield, due to pin-compatibility 
                                    with Arduino Due and MEGA boards
                                </li>
                                <li>
                                    Has two independent output channels per board. Multiple boards 
                                    can be stacked to generate up to 256 channels.
                                </li>
                                <li>
                                    Onboard opto-isolators separate digital and analog signals
                                </li>
                                <li>
                                    Can be powered by a 9 V battery connected to a DC input or by 
                                    an external 5 V input on VIN. For proper operation, we recommend 
                                    two Li-Ion batteries (e.g. 18650s) connected in series. (Batteries 
                                    not included.)
                                </li>
                                <li>
                                    Onboard LEDs visually indicate when neurostimulation is delivered, 
                                    and a precision current-sense amplifier provides a voltage output 
                                    proportional to the stimulation current.
                                </li>
                                <li>
                                    Includes several safety features such as fuses, an emergency OFF 
                                    switch, and solid-state relays to shunt inputs with low impedance 
                                    resistors
                                </li>
                                <li>
                                    Comes with a pair of 2 mm pin-style lead wires to connect with 
                                    standard, reusable, hydrogel-based stimulation electrodes
                                </li>
                                <li>
                                    The optional Accessory Kit includes four 1.25-inch round and four 
                                    2-inch square hydrogel electrodes, a pair of lead wires, and a 
                                    pair of bifurcation cables.
                                </li>
                            </ul>
                            <br />
                            <img src={SampleImg2} alt="" />
                            <br /><br />
                            <h3>Technical Specifications</h3>
                            <ul>
                                <li>
                                    Adjustable current output range: +/- 25 mA, resolution 250 µA/step
                                </li>
                                <li>
                                    Adjustable stimulation frequency range: 1 – 100 Hz, pulse-width 0 – 2 ms
                                </li>
                                <li>
                                    Maximum compliance voltage: +/- 72 V
                                </li>
                                <li>
                                    The onboard 16-bit dsPIC33F Microcontroller (40 MIPS, 256 KB flash 
                                    memory) operates as an I²C peripheral with a programmable, 7-bit 
                                    address.
                                </li>
                                <li>
                                    Stimulation current output can be measured using the onboard 12-bit 
                                    ADC or an external ADC.
                                </li>
                                <li>
                                    The PCB includes a microUSB interface but the components are not 
                                    populated. (Upon request, we are happy to provide a list of the 
                                    necessary components.) If populated, this interface can be used 
                                    to control NeuroStimDuino from a PC by way of serial commands.
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Landing;