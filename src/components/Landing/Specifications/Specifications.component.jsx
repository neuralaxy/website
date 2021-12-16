import React from "react";
import { Accordion } from "react-bootstrap";

const Specifications = () => {
  return (
    <>
      <Accordion defaultActiveKey={0}>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h3>Technical Specifications</h3>
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>
                Adjustable current output range: +/- 20 mA, resolution 240
                µA/step
              </li>
              <li>
                Adjustable stimulation frequency range: 3 – 100 Hz, pulse-width
                0 – 2 ms
              </li>
              <li>
                Maximum compliance voltage: +/- 60 V (uses +/- 72V High-voltage
                supply)
              </li>
              <li>
                The onboard 16-bit dsPIC33F Microcontroller (40 MIPS, 256 KB
                flash memory) operates as an I²C peripheral with a programmable,
                7-bit address.
              </li>
              <li>
                Stimulation current output can be measured using the onboard
                12-bit ADC or an external ADC.
              </li>
              <li>
                The PCB includes a microUSB interface but the components are not
                populated. (Upon request, we are happy to provide a list of the
                necessary components.) If populated, this interface can be used
                to control NeuroStimDuino from a PC by way of serial commands.
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default Specifications;
