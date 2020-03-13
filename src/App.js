import React from "react";
import { Footer, Navbar } from "./components/";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { ThemeProvider } from "styled-components";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Helmet from "react-helmet";
import {
  Landing,
  History,
  Pv,
  NotFound,
  Post,
  Statuts,
  Folklore
} from "./routes";

import "./assets/css/style.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

library.add(fab);
library.add(fas);

const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!./assets/css/variables.scss'); // eslint-disable-line

export default () => {
  return (
    <Router basename="/">
      <ThemeProvider theme={theme}>
        <Helmet></Helmet>

        <Navbar />

        <Switch>
          <Route path="/" exact>
            <Landing />
          </Route>
          <Route path="/history" exact>
            <History />
          </Route>
          <Route path="/pv" exact>
            <Pv />
          </Route>
          <Route path="/posts/:article">
            <Post />
          </Route>
          <Route path="/admin/:article">
            <Statuts />
          </Route>
          <Route path="/folklore/:article">
            <Folklore />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>

        <Footer />
      </ThemeProvider>
    </Router>
  );
};
