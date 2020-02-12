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


const CardWrapper = styled.div`
  margin: calc(5%) calc(10%);

  -webkit-box-shadow: 1px 1px 6px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 1px 1px 6px 0px rgba(0,0,0,0.75);
  box-shadow: 1px 1px 6px 0px rgba(0,0,0,0.75);

  &:hover {
    -webkit-box-shadow: 2px 2px 6px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 2px 2px 6px 0px rgba(0,0,0,0.75);
    box-shadow: 2px 2px 6px 0px rgba(0,0,0,0.75);
  }
`;


export default (props) => {
  return (
    <CardWrapper>
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
    </CardWrapper>
  );
}
