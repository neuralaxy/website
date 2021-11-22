import React from "react";
import { Accordion } from "react-bootstrap";

import "./Support.style.css";

const Support = () => {
    return (
        <>
            <Accordion defaultActiveKey={0}>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <h3>Support and Documentation</h3>
                    </Accordion.Header>
                    <Accordion.Body>
                        <br />
                        For instructions and video tutorials on the placement of stimulation electrodes
                        to evoke various muscle contractions, please refer to {" "}
                        <a href="https://www.axelgaard.com/Education" target="_blank" rel="noreferrer">
                            Electrode Placement & Functional Movement
                        </a>,
                        courtesy of Dr. Lucinda Baker, Associate Professor (retired) at the University of Southern
                        California and Axelgaard Manufacturing Co., Ltd. For NeuroStimDuino software and
                        design files, please see {" "}
                        <a href="https://github.com/neuralaxy/NeuroStimDuino" target="_blank" rel="noreferrer">
                            our GitHub repository
                        </a>.
                        If you have questions, you can use the {" "}
                        <a href="https://www.crowdsupply.com/neuralaxy/neurostimduino/ask-question" target="_blank" rel="noreferrer">
                            Ask a technical question
                        </a>
                        {" "} link below.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}

export default Support;