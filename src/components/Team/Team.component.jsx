import React from "react";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import "./Team.style.css";

const Team = () => {
  return (
    <section id="team">
      <div className="container">
        <div className="team-container">
          <h3 className="heading">Meet the people behind NeuroStimDuino</h3>
          <Row>
            <Col className="col-lg-4 col-md-6 col-sm-12">
              <div className="team-item set-bg">
                <div className="team-text">
                  <div className="team-title">
                    <h4>Nikunj Bhagat</h4>
                    <span>Founder</span>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque ex molestiae modi possimus sed unde rem nisi corporis
                    totam at.
                  </p>
                  <div className="team-social">
                    <a href="/">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a href="/">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="/">
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="col-lg-4 col-md-6 col-sm-12">
              <div className="team-item set-bg">
                <div className="team-text">
                  <div className="team-title">
                    <h4>Aviroop Nandy</h4>
                    <span>Website Developer</span>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque ex molestiae modi possimus sed unde rem nisi corporis
                    totam at.
                  </p>
                  <div className="team-social">
                    <a href="/">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a href="/">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="/">
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="col-lg-4 col-md-6 col-sm-12">
              <div className="team-item set-bg">
                <div className="team-text">
                  <div className="team-title">
                    <h4>Nikunj Bhagat</h4>
                    <span>Founder</span>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque ex molestiae modi possimus sed unde rem nisi corporis
                    totam at.
                  </p>
                  <div className="team-social">
                    <a href="/">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a href="/">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="/">
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="col-lg-4 col-md-6 col-sm-12">
              <div className="team-item set-bg">
                <div className="team-text">
                  <div className="team-title">
                    <h4>Aviroop Nandy</h4>
                    <span>Website Developer</span>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque ex molestiae modi possimus sed unde rem nisi corporis
                    totam at.
                  </p>
                  <div className="team-social">
                    <a href="/">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a href="/">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="/">
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="col-lg-4 col-md-6 col-sm-12">
              <div className="team-item set-bg">
                <div className="team-text">
                  <div className="team-title">
                    <h4>Nikunj Bhagat</h4>
                    <span>Founder</span>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque ex molestiae modi possimus sed unde rem nisi corporis
                    totam at.
                  </p>
                  <div className="team-social">
                    <a href="/">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a href="/">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="/">
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="col-lg-4 col-md-6 col-sm-12">
              <div className="team-item set-bg">
                <div className="team-text">
                  <div className="team-title">
                    <h4>Aviroop Nandy</h4>
                    <span>Website Developer</span>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque ex molestiae modi possimus sed unde rem nisi corporis
                    totam at.
                  </p>
                  <div className="team-social">
                    <a href="/">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a href="/">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="/">
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default Team;
