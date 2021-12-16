import React from "react";
import { useHistory } from "react-router-dom";
import { Accordion } from "react-bootstrap";
import brochurePdf from "../../../assets/text/Neuralaxy_brochure.pdf";

import "./Support.style.css";

const Support = () => {
  let history = useHistory();

  const navigateTo = (str) => {
    history.push(`/${str}`);
  };

  return (
    <>
      <Accordion defaultActiveKey={0}>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h3>Support and Documentation</h3>
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>
                For NeuroStimDuino software and design files, please see{" "}
                <a
                  href="https://github.com/neuralaxy/NeuroStimDuino"
                  target="_blank"
                  rel="noreferrer"
                >
                  our GitHub repository
                </a>
                .
              </li>
              <li>
                Checkout NeuroStimDuino's Brochure
                <div>
                  <a
                    href={brochurePdf}
                    download="NeuroStimDuino_Brochure.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download Brochure
                  </a>
                </div>
              </li>
              <li>
                For instructions and video tutorials on the placement of
                stimulation electrodes to evoke various muscle contractions,
                please refer to{" "}
                <a
                  href="https://www.axelgaard.com/Education"
                  target="_blank"
                  rel="noreferrer"
                >
                  Electrode Placement & Functional Movement
                </a>
                , courtesy of Dr. Lucinda Baker, Associate Professor (retired)
                at the University of Southern California and Axelgaard
                Manufacturing Co., Ltd.
              </li>
              <li>
                If you have questions, you can use the{" "}
                <span
                  className="navigate-to-contact"
                  onClick={() => navigateTo("contact")}
                >
                  Ask a technical question
                </span>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default Support;
