import React from 'react';
import { Footer, Navbar } from './components/';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Helmet from 'react-helmet';
import { Landing, NotFound, Post } from './routes';

import SETTINGS from './settings.json';

import './assets/css/style.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

library.add(fab)
library.add(fas)

const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!./assets/css/variables.scss'); // eslint-disable-line

export default () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>

        <Helmet>
          <title>{SETTINGS.title}</title>
          <meta
            name="description"
            content={SETTINGS.description}
          />
        </Helmet>
          <Navbar/>

          <Switch>
            <Route path="/" exact>
              <Landing/>
            </Route>
            <Route path="/posts/:article">
              <Post/>
            </Route>
            <Route>
              <NotFound/>
            </Route >
          </Switch>

          <Footer/>
      </ThemeProvider>
    </Router>
  );
}
