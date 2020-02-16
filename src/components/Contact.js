import React from 'react';
import { H3, Text } from './Titles.js';
import {
  Button,
  Container,
  Col,
  Form, FormGroup, Input,
  Row
} from 'reactstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SETTINGS from '../settings';

export default () => {
  return (
    <Container style={{padding:"50px 150px"}}>
      <Form
        action={SETTINGS.contact.formspree}
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
  );
}
