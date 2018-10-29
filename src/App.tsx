import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Helmet from "react-helmet";

import Container from "./components/Container";
import Header from "./components/Header";
import Body from "./components/Body";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const HelmetStuff = () => (
  <Helmet>
    <title>josh mcmillan</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Helmet>
);

export default () => (
  <BrowserRouter>
    <Container>
      <HelmetStuff />
      <Header />
      <Body>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route component={NotFound} />
        </Switch>
      </Body>
    </Container>
  </BrowserRouter>
);
