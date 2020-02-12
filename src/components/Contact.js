import React, { useEffect } from 'react';
import { H3, Text } from './Titles.js';
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
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Center = styled.div`
  padding-top: 50px;
  width: 25%;
  margin: auto;
`;

export default () => {
  return (
    <section className="section section-lg section-shaped pg-250 color-main">
      <div id="contact" className="h-100">
        <Row className="align-items-center">
          <Col lg="6">
            <Center>
              <H3><FontAwesomeIcon icon={['fas', 'address-card']} /> Nous contacter</H3>
              <Text>
                Pour toutes vos questions sur ..
                <ul style={{listStyleType: "none"}}>
                  <li>le Réseaux Atlas <FontAwesomeIcon icon={['fas', 'globe']} /></li>
                  <li>Les commandes <FontAwesomeIcon icon={['fas', 'truck']} /></li>
                  <li>Nos projets <FontAwesomeIcon icon={['fas', 'file']} /></li>
                </ul>
              </Text>
            </Center>
          </Col>
          <Col lg="6">
            <Container style={{padding:"50px 150px"}}>
              <Form
                action="https://formspree.io/myywndvq"
                method="POST"
              >
                <FormGroup>
                  <Input type="email" name="email" id="contactEmail" placeholder="Entrez votre adresse mail" />
                </FormGroup>
                <FormGroup>
                  <Input type="text" name="subject" id="contactSubject" placeholder="Sujet" />
                </FormGroup>
                <FormGroup>
                  <Input type="textarea" name="text" id="contentArea" placeholder="Contenu"/>
                </FormGroup>
                <Button block>Envoyer</Button>
              </Form>
            </Container>
          </Col>
        </Row>
      </div>
    </section>
  );
}
