import React, { useState } from "react";
import Tutorial1 from "./Tutorial1/Tutorial1.component";

import "./Tutorials.style.css";

const Tutorials = () => {
    const [tutorialNumber, setTutorialNumber] = useState(1);

    return (
        <section id="tutorials">
            <div className="container">
                <div className="tutorials-container">
                    <div className="left-bar">
                        <div className="left-bar-item selected" id="bar1" onClick={() => setTutorialNumber(1)}>
                            <h5><b>Tutorial 1:</b> Getting Started</h5>
                        </div>
                        <div className="left-bar-item" id="bar2" onClick={() => setTutorialNumber(2)}>
                            <h5><b>Tutorial 2:</b> Electrodes Placement</h5>
                        </div>
                        <div className="left-bar-item" id="bar3" onClick={() => setTutorialNumber(3)}>
                            <h5><b>Tutorial 3:</b> Controlling Multiple NeuroStimDuinos on a single I²C Bus</h5>
                        </div>
                    </div>
                    <div className="right-bar">
                        { tutorialNumber === 1 ? (
                            <div>
                                <h3>Tutorial 1: Getting Started</h3>
                                <Tutorial1 />
                            </div>
                        ) : tutorialNumber === 2 ? (
                            <div>
                                <h3>Tutorial 2: Electrodes Placement</h3>
                            </div>
                        ) : (
                            <div>
                                <h3>Tutorial 3: Controlling Multiple NeuroStimDuinos on a single I²C Bus</h3>
                            </div>
                        ) }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Tutorials;