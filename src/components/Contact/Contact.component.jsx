import React, { useEffect, useRef } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import emailjs from "emailjs-com";
import logo from "../../assets/images/logo_with-bg_500.png";

import "./Contact.style.css";

const Contact = () => {
  const form = useRef();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();
    await emailjs
      .sendForm(
        "service_neuralaxy",
        "template_neuralaxy",
        form.current,
        "user_jqttQ5XcPG5Ll5bgbZph4"
      )
      .then((res) => {
        alert("Message delivered successfully! ", res);
      })
      .catch((error) => {
        alert("Error! Please try again! ", error);
      });
    e.target.reset();
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="contact-container">
          <Card className="shadow">
            <Card.Body>
              <Row className="custom-row">
                <Col className="col-md-6 border-end">
                  <h1 className="contact-heading">Contact Form</h1>
                  <hr />
                  <Form ref={form} onSubmit={(e) => sendEmail(e)}>
                    <Form.Group>
                      <label htmlFor="name" className="mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="form-control mb-2"
                        placeholder="Enter Full Name"
                      />
                    </Form.Group>
                    <Form.Group>
                      <label htmlFor="mobile" className="mb-1">
                        Mobile Number
                      </label>
                      <input
                        type="number"
                        name="mobile"
                        className="form-control mb-2"
                        placeholder="Enter Mobile Number"
                      />
                    </Form.Group>
                    <Form.Group>
                      <label htmlFor="email" className="mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="form-control mb-2"
                        placeholder="Enter Email Address"
                      />
                    </Form.Group>
                    <Form.Group>
                      <label htmlFor="message" className="mb-1">
                        Message
                      </label>
                      <textarea
                        rows="3"
                        name="message"
                        className="form-control mb-2"
                        placeholder="Type your message..."
                      ></textarea>
                    </Form.Group>
                    <Form.Group className="py-2">
                      <button
                        type="submit"
                        className="btn btn-custom shadow w-100"
                        // onClick={(e) => sendEmail(e)}
                      >
                        Send
                      </button>
                    </Form.Group>
                  </Form>
                </Col>
                <Col className="col-md-6 address">
                  <div className="logo-img">
                    <img src={logo} alt="" />
                  </div>
                  <h2 className="main-heading">Contact</h2>
                  <div className="underline"></div>
                  <p>Neuralaxy LLC, registered in Delaware, USA</p>
                  {/* <p>+91 93608 42073</p> */}
                  <p>
                    Email:{" "}
                    <a href="mailto:contactus@neuralaxy.com">
                      contactus@neuralaxy.com
                    </a>
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
