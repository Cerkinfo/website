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
import styled from 'styled-components';

export const Sep = styled.div`
  padding: 80px 15px;
  font-weight: 200;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.light};
`;

export default ({ title }) => {
  return (
    <section className="section section-lg section-shaped pg-250 color-light">
      <Sep className="h-100">
        <Row className="align-items-center text-center w-100">
          <H1 className="w-100">{title}</H1>
        </Row>
      </Sep>
    </section>
  );
}
