import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header/Header.component";
import Landing from "./components/Landing/Landing.component";

import "./App.css";

const App = () => {
    return (
        <div className="app">
            <Header />
            <div className="main">
                <Container className="container-box rounded">
                    <Landing />
                </Container>
            </div>
        </div>
    )
}

export default App;