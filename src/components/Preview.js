import React from 'react';
import {
  Button,
  Card,
  CardTitle,
  CardSubtitle,
  CardText,
  CardImg,
  CardLink,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";
import { Link } from 'react-router-dom';
import { H2, Subtitle, Text } from "./Titles.js"
import { formatDate } from "../utils/date.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components';


export default (props) => {
  return (
    <Card body >
      <CardTitle className="text-center"><H2>{props.title}</H2></CardTitle>
      <CardSubtitle>
        <Subtitle>
          {formatDate(props.date)}
        </Subtitle>
      </CardSubtitle>
      <CardText>
        <Text>
          {props.preview}
        </Text>
      </CardText>
      <CardLink>
        <Link to={props.href}>
          <Button block>Lire la suite</Button>
        </Link>
      </CardLink>
    </Card>
  );
}
