import React from "react";
import { Button, Card, CardTitle, CardText, CardLink } from "reactstrap";
import { Link } from "react-router-dom";
import { H2, Text } from "./Titles.js";

export default props => {
  return (
    <Card body>
      <CardTitle className="text-center">
        <H2>{props.title}</H2>
      </CardTitle>
      <CardText>
        <Text>{props.brief}</Text>
      </CardText>
      <CardLink>
        <Link to={props.href}>
          <Button block>Lire la suite</Button>
        </Link>
      </CardLink>
    </Card>
  );
};
