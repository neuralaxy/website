import React from "react";
import { Card, Col, Form, Row } from "react-bootstrap";

import "./Contact.style.css";

const Contact = () => {
    return (
        <section id="contact">
            <div className="container">
                <div className="contact-container">
                    <Card className="shadow">
                        <Card.Body>
                            <Row>
                                <Col className="col-md-6 border-end">
                                    <h1 className="contact-heading">Contact Form</h1>
                                    <hr />
                                    <Form.Group>
                                        <label
                                            htmlFor="name"
                                            className="mb-1"
                                        >
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
                                        <label
                                            htmlFor="mobile"
                                            className="mb-1"
                                        >
                                            Mobile Number
                                        </label>
                                        <input
                                            type="number"
                                            name="name"
                                            className="form-control mb-2"
                                            placeholder="Enter Mobile Number"
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <label
                                            htmlFor="email"
                                            className="mb-1"
                                        >
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
                                        <label
                                            htmlFor="message"
                                            className="mb-1"
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            rows="3"
                                            className="form-control mb-2"
                                            placeholder="Type your message..."
                                        ></textarea>
                                    </Form.Group>
                                    <Form.Group className="py-2">
                                        <button type="button" className="btn btn-custom shadow w-100">Send</button>
                                    </Form.Group>
                                </Col>
                                <Col className="col-md-6">
                                    <h2 className="main-heading">Address Information</h2>
                                    <div className="underline"></div>
                                    <p>
                                        7/2 Aurobindo Avenue, A-Zone, Durgapur-713204, West Bengal
                                    </p>
                                    <p>
                                        +91 93608 42073
                                    </p>
                                    <p>
                                        Email: <a href="mailto:contactus@neuralaxy.com">contactus@neuralaxy.com</a>
                                    </p>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default Contact;