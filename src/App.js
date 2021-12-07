import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header/Header.component";
import Landing from "./components/Landing/Landing.component";
import Tutorials from "./components/Tutorials/Tutorials.component";
import Demo from "./components/Demo/Demo.component";
// import Team from "./components/Team/Team.component";
import Contact from "./components/Contact/Contact.component";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/">
          <div className="main">
            <Landing />
            {/* <Container className="container-box rounded">
              <Landing />
            </Container> */}
          </div>
        </Route>
        <Route path="/tutorials">
          <div className="main">
            <Container className="container-box rounded">
              <Tutorials />
            </Container>
          </div>
        </Route>
        <Route path="/demo">
          <div className="main">
            <Container className="container-box rounded">
              <Demo />
            </Container>
          </div>
        </Route>
        {/* <Route path="/team">
          <div className="main">
            <Container className="container-box rounded">
              <Team />
            </Container>
          </div>
        </Route> */}
        <Route path="/contact">
          <div className="main">
            <Container className="container-box rounded">
              <Contact />
            </Container>
          </div>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
