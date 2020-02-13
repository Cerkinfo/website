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
import SETTINGS from '../settings.json';

export default () => {
  return (
    <section className="section section-lg section-shaped pg-250 color-main">
      <div className="h-100">
        <Row className="align-items-center">
          <Col lg="6">
              <H1>{SETTINGS.title}</H1>
              <Subtitle className="text-center">{SETTINGS.subtitle}</Subtitle>
          </Col>
          <Col lg="6">
            <Gradient>
              <Skew src={require("../assets/img/banner.png")}/>
            </Gradient>
          </Col>
        </Row>
      </div>
    </section>
  );
}
