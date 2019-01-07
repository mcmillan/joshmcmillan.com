import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Container from "./components/Container";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default () => (
  <BrowserRouter>
    <Container>
      <Header />
      <Body>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route component={NotFound} />
        </Switch>
      </Body>
      {/* <Footer /> */}
    </Container>
  </BrowserRouter>
);
