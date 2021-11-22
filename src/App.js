import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header/Header.component";
import Landing from "./components/Landing/Landing.component";
import Tutorials from "./components/Tutorials/Tutorials.component";

import "./App.css";

const App = () => {
    return (
        <div className="app">
            <Header />
            <Switch>
                <Route exact path="/">
                    <div className="main">
                        <Container className="container-box rounded">
                            <Landing />
                        </Container>
                    </div>
                </Route>
                <Route path="/tutorials">
                    <div className="main">
                        <Container className="container-box rounded">
                            <Tutorials />
                        </Container>
                    </div>
                </Route>
            </Switch>
        </div>
    )
}

export default App;