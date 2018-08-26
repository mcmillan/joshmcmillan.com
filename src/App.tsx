import * as React from "react";

import Helmet from "react-helmet";

import Header from "./components/Header";
import Body from "./components/Body";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

import { BrowserRouter, Route, Switch } from "react-router-dom";

const HelmetStuff = () => (
  <Helmet>
    <title>josh mcmillan</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Helmet>
);

export default () => (
  <BrowserRouter>
    <main>
      <HelmetStuff />
      <Header />
      <Body>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route component={NotFound} />
        </Switch>
      </Body>
    </main>
  </BrowserRouter>
);
