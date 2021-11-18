import React from "react";
import { Accordion } from "react-bootstrap";

import "./Features.style.css";

const Features = () => {
    return (
        <>
            <Accordion defaultActiveKey={0}>
                <Accordion.Item eventKey="0">
                    <Accordion.Header className="shadow-none">
                        <h3>Features</h3>
                    </Accordion.Header>
                    <Accordion.Body>
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
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}

export default Features;