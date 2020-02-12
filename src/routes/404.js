import React, { useEffect } from 'react';
import { H3, Text } from '../components/Titles.js';
import {
  Button,
  Card,
  CardTitle,
  CardText,
  Container,
  Col,
  Form, FormGroup, Label, Input, FormText,
  Row
} from "reactstrap";

export default () => {
  return (
    <section className="section section-lg section-shaped pg-250" style={{padding: "100px"}}>
      <div className="h-100">
        <Row className="align-items-center">
          <Col className="text-center">
            <H3>404: Not Found</H3>
            <Text>
            </Text>
          </Col>
        </Row>
      </div>
    </section>
  );
}
