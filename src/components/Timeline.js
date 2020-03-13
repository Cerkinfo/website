import React from "react";
import { H2, H3, Text, Center, Quote, Cite } from "../components/Titles";
import {
  Button,
  Container,
  Col,
  Row,
  Card,
  CardTitle,
  CardSubtitle,
  CardText,
  CardImg,
  CardLink
} from "reactstrap";

export default ({ timeline }) => {
  return (
    <ul className="timeline">
      {timeline.map((e, i) => (
        <li className={i % 2 ? "timeline-inverted" : null}>
          <div className="timeline-image">
            <H2 style={{ paddingTop: "20px" }}>{e.date}</H2>
          </div>
          <div className="timeline-panel">
            <Row className="timeline-body">
              <Card body>
                <CardTitle className="text-center">
                  <H2>{e.title}</H2>
                </CardTitle>
                <CardText>
                  <Text>{e.content}</Text>
                  {e.image ? <img className="w-100" src={e.image} /> : null}
                </CardText>
              </Card>
            </Row>
          </div>
        </li>
      ))}
    </ul>
  );
};
