import React, { useEffect } from 'react';
import { H1, Subtitle } from './Titles.js';
import { Skew, Gradient } from './Images.js';
import {
  Button,
  Card,
  CardTitle,
  CardText,
  Container,
  Col,
  Row
} from "reactstrap";
import SETTINGS from '../settings';

export default () => {
  return (
    <section className="ui-section  -hero section section-lg section-shaped pg-250 color-main" style={{
      "background-size": "cover",
      "-webkit-background-size": "cover",
      "-moz-background-size": "cover",
      "-o-background-size": "cover",
    }}>
        <Row className="align-items-center h-100 color-main">
          <Col lg="6">
            <div className="ui-aside">
              <h1 className="ui-heading">
                <span className="ui-heading-inner">
                  <H1>{SETTINGS.title}</H1>
                </span>
              </h1>
              <Subtitle style={{paddingRight: "40px"}} className="text-right fade-in">{SETTINGS.subtitle}</Subtitle>
            </div>
          </Col>
          <Col lg="6" className="w-100 text-center">
            <img className="img-fluid fade-in" style={{padding: "0 50px", maxWidth: "80%"}} src={require("../assets/img/cerkinfo_logo.png")}/>
          </Col>
        </Row>
    </section>
  );
}
