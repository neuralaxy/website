import React, { useState } from "react";
import Tutorial1 from "./Tutorial1/Tutorial1.component";
import Tutorial2 from "./Tutorial2/Tutorial2.component";

import "./Tutorials.style.css";

const Tutorials = () => {
    const [tutorialNumber, setTutorialNumber] = useState(1);

    const toggleSelected = (id) => {
        var bar1 = document.getElementById("bar1");
        var bar2 = document.getElementById("bar2");
        var bar3 = document.getElementById("bar3");
        switch(id) {
            case "bar1":
                bar1.classList.add("selected");
                bar2.classList.remove("selected");
                bar3.classList.remove("selected");
                break;
            case "bar2":
                bar1.classList.remove("selected");
                bar2.classList.add("selected");
                bar3.classList.remove("selected");
                break;
            case "bar3":
                bar1.classList.remove("selected");
                bar2.classList.remove("selected");
                bar3.classList.add("selected");
                break;
            default: return
        }
    }

    return (
        <section id="tutorials">
            <div className="container">
                <div className="tutorials-container">
                    <div className="left-bar">
                        <div className="left-bar-item selected" id="bar1" onClick={() => {toggleSelected("bar1"); setTutorialNumber(1)}}>
                            <h5><b>Tutorial 1:</b> Getting Started</h5>
                        </div>
                        <div className="left-bar-item" id="bar2" onClick={() => {toggleSelected("bar2"); setTutorialNumber(2)}}>
                            <h5><b>Tutorial 2:</b> Electrodes Placement</h5>
                        </div>
                        <div className="left-bar-item" id="bar3" onClick={() => {toggleSelected("bar3"); setTutorialNumber(3)}}>
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
                                <Tutorial2 />
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