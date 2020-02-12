import React, { useEffect } from 'react';
import {
  Button,
  Card,
  CardTitle,
  CardText,
  CardImg,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";
import { H2, Text } from "./Titles.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components';

const Floating = styled.div`
  z-index: 1;
  width: 380px;
  margin-left: calc(50% - 190px);

  @media (max-width: 1024px) {
    margin-top: 50px;
  }

  @media (min-width: 1024px) {
    z-index: 0;
    position: absolute;
    margin-top: -150px;
    -webkit-box-shadow: 1px 1px 6px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 1px 1px 6px 0px rgba(0,0,0,0.75);
    box-shadow: 1px 1px 6px 0px rgba(0,0,0,0.75);

    &:hover {
      -webkit-box-shadow: 2px 2px 6px 0px rgba(0,0,0,0.75);
      -moz-box-shadow: 2px 2px 6px 0px rgba(0,0,0,0.75);
      box-shadow: 2px 2px 6px 0px rgba(0,0,0,0.75);
    }
  }
`;

export default () => {
  return (
    <Floating>
      <Card body >
        <CardTitle className="text-center"><H2>Commander</H2></CardTitle>
        <CardText>
          <Row>
            <Col className="text-center">
              <img style={{ width: "75px" }} src={require("../assets/img/mdr.png")}/>
            </Col>
            <Col>
              <Text>Notre bière solidaire au profit du collectif des <i>morts de la rue</i> est disponible a la commande</Text>
            </Col>
          </Row>
        </CardText>
        <Button href="https://docs.google.com/forms/d/e/1FAIpQLSe_QIafRtkXuzgfCBS_rVDQD2_rYNfM3dV2KDE-ScZzbH4A3g/viewform?fbclid=IwAR2IFavPX5S6HiWxhvzqY8Ft0xeg31sXrYpcL_CPhP_zQLnUGSTLS6QY_9E">Plus d'infos</Button>
      </Card>
    </Floating>
  );
}
