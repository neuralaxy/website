import React from "react";
import { Accordion } from "react-bootstrap";

import "./Comparisons.style.css";

const Comparisons = () => {
    return (
        <>
            <Accordion defaultActiveKey={1}>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        <h3>Comparisons</h3>
                    </Accordion.Header>
                    <Accordion.Body>
                        <table className="comparisons-table">
                            <tr>
                                <th>Product</th>
                                <td className="product"><b>NeuroStimDuino</b></td>
                                <td className="product"><b>LG-TEC ELITE</b></td>
                                <td className="product"><b>DS4</b></td>
                            </tr>
                            <tr>
                                <th>Manufacturer</th>
                                <td className="bg-active">Neuralaxy</td>
                                <td className="bg-active">LGMedSupply</td>
                                <td className="bg-active">Digitimer</td>
                            </tr>
                            <tr>
                                <th>Max. Current Output</th>
                                <td className="bg-active">+/- 20 mA</td>
                                <td className="bg-active">105 mA</td>
                                <td className="bg-active">+/- 10 mA</td>
                            </tr>
                            <tr>
                                <th>Compliance Voltage</th>
                                <td className="bg-active">+/- 60 V</td>
                                <td className="bg-active">105 V</td>
                                <td className="bg-active">+/- 48 V</td>
                            </tr>
                            <tr>
                                <th>No. of Output Channels</th>
                                <td className="bg-success">2</td>
                                <td className="bg-success">2</td>
                                <td className="bg-danger">1</td>
                            </tr>
                            <tr>
                                <th>Additional output channels possible by stacking</th>
                                <td className="bg-success">Yes</td>
                                <td className="bg-danger">No</td>
                                <td className="bg-danger">No</td>
                            </tr>
                            <tr>
                                <th>Waveform Shape</th>
                                <td className="bg-success">Biphasic</td>
                                <td className="bg-danger">Monophasic</td>
                                <td className="bg-success">Biphasic</td>
                            </tr>
                            <tr>
                                <th>Electronically Programmable</th>
                                <td className="bg-success">Yes</td>
                                <td className="bg-danger">No</td>
                                <td className="bg-success">Yes</td>
                            </tr>
                            <tr>
                                <th>Open Source</th>
                                <td className="bg-success">Yes</td>
                                <td className="bg-danger">No</td>
                                <td className="bg-danger">No</td>
                            </tr>
                            <tr>
                                <th>Onboard Current Measurement</th>
                                <td className="bg-success">Yes</td>
                                <td className="bg-danger">No</td>
                                <td className="bg-danger">No</td>
                            </tr>
                            <tr>
                                <th>FDA approved</th>
                                <td className="bg-danger">No</td>
                                <td className="bg-success">Yes</td>
                                <td className="bg-danger">No</td>
                            </tr>
                            <tr>
                                <th>Price</th>
                                <td className="bg-warning">$260</td>
                                <td className="bg-success">$150</td>
                                <td className="bg-danger">$2250</td>
                            </tr>
                        </table>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}

export default Comparisons;