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
    <section className="section section-lg section-shaped pg-250 color-main">
      <div className="h-100">
        <Row className="align-items-center">
          <Col lg="6">
            <div class="ui-aside">
              <h1 class="ui-heading">
                <span class="ui-heading-inner">
                  <span>{SETTINGS.title}</span>
                </span>
              </h1>
            </div>
              
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
