import React from "react";
import Description from "../Description/Description.component";
import Features from "../Features/Features.component";
import Specifications from "../Specifications/Specifications.component";
import Comparisons from "../Comparisons/Comparisons.component";
import BoardLayout from "../BoardLayout/BoardLayout.component";
import PinoutDiagram from "../PinoutDiagram/PinoutDiagram.component";
import Support from "../Support/Support.component";
import img2 from "../../assets/images/Neurostimduino-front-01.png";

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
                            <Description />
                            <br /><br />
                            <Features />
                            <br />
                            <img src={img2} alt="" />
                            <br /><br />
                            <Specifications />
                            <br />
                            <Comparisons />
                            <br />
                            <BoardLayout />
                            <br /><br />
                            <PinoutDiagram />
                            <br /><br />
                            <Support />
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Landing;