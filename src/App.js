import React from 'react';
import logo from './logo.svg';
import { Announce, Contact, Footer, Landing, Navbar, Map } from "./components/";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import './assets/css/style.scss';
import { ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

library.add(fab)
library.add(fas)

const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!./assets/css/variables.scss'); // eslint-disable-line

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
          <Navbar/>

          <Switch>
            <Route path="/">
              <Landing/>
              <Announce/>
              <Map/>
              <Contact />
            </Route>
          </Switch>

          <Footer/>
      </ThemeProvider>
    </Router>
  );
}

export default App;
