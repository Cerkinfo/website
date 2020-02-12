import React, { useEffect } from 'react';
import { H1, Subtitle } from './Titles.js';
import {
  Button,
  Card,
  CardTitle,
  CardText,
  Container,
  Col,
  Row
} from "reactstrap";
import styled from 'styled-components';

const Skew = styled.img`
  width: 100%;

  @media (min-width: 1024px) {
    clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%, calc(0% + 40px) 70%, calc(0% + 30px) 50%);
  }
`;

const Gradient = styled.div`
  position:relative;
  display:inline-block;

  &:after {
    content:'';
    position:absolute;
    left:0; top:0;
    width:100%; height:100%;
    display:inline-block;
    background: -moz-linear-gradient(top, rgba(107, 189, 172, 1) 0%, rgba(255, 255, 255, 0) 50%); /* FF3.6+ */
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(255, 255, 255, 0)), color-stop(100%,rgba(107, 189, 172, 1))); /* Chrome,Safari4+ */
    background: -webkit-linear-gradient(top, rgba(107, 189, 172, 1) 0%,rgba(255, 255, 255, 0) 50%); /* Chrome10+,Safari5.1+ */
    background: -o-linear-gradient(top, rgba(107, 189, 172, 1) 0%,rgba(255, 255, 255, 0) 50%); /* Opera 11.10+ */
    background: -ms-linear-gradient(top, rgba(107, 189, 172, 1) 0%,rgba(255, 255, 255, 0) 50%); /* IE10+ */
    background: linear-gradient(to bottom, rgba(107, 189, 172, 1) 0%,rgba(255, 255, 255, 0) 50%); /* W3C */
  }
`;

export default () => {
  return (
    <section className="section section-lg section-shaped pg-250 color-main">
      <div className="h-100">
        <Row className="align-items-center">
          <Col lg="6">
              <H1>Réseau Atlas</H1>
              <Subtitle className="text-center">A.S.B.L</Subtitle>
          </Col>
          <Col lg="6">
            <Gradient>
              <Skew src={require("../assets/img/atlas.png")}/>
            </Gradient>
          </Col>
        </Row>
      </div>
    </section>
  );
}
