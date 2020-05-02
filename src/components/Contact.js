import React from "react";
import { Center } from "./Titles.js";
import { Button, Form, FormGroup, Input } from "reactstrap";
import SETTINGS from "../settings";

export default () => {
  return (
    <Center>
      <Form action={SETTINGS.contact.formspree} method="POST">
        <FormGroup>
          <Input
            type="email"
            name="email"
            id="contactEmail"
            placeholder="Entrez votre adresse mail"
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            name="subject"
            id="contactSubject"
            placeholder="Sujet"
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="textarea"
            name="text"
            id="contentArea"
            placeholder="Contenu"
          />
        </FormGroup>
        <Button
          className="g-recaptcha"
          data-sitekey="6LcbW_EUAAAAALKdxfpxDKA59WL8vYJFoMHvJRwj"
          data-callback="onSubmit"
          block
        >
          Envoyer
        </Button>
      </Form>
    </Center>
  );
};
