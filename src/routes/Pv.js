import React from "react";
import { Separator, Timeline } from "../components/";
import { H1, H3, Text, Center, Quote, Cite } from "../components/Titles";
import { Skew, Overlay } from "../components/Images";
import {
  Button,
  Card,
  CardTitle,
  CardText,
  Container,
  Col,
  Row
} from "reactstrap";
import * as moment from "moment";
import PV from "../assets/pv/pv.json";

export default () => {
  return (
    <>
      <section className="section section-lg section-shaped pg-250 color-main">
        <Row className="align-items-center h-100 color-main">
          <Col lg="6">
            <H1 className="font-white">Procès Verbaux des réunions du CI</H1>
          </Col>
          <Col lg="6" className="w-100 text-center">
            <Skew src={require("../assets/img/pv.jpg")} />
          </Col>
        </Row>
      </section>
      <Separator title={"Procès Verbaux"} />
      {PV.sort((a, b) => {
        if (a.year > b.year) return -1;
        if (a.year < b.year) return 1;

        return 0;
      }).map(x => (
        <>
          <Separator title={x.year} />
          <section
            style={{ padding: "50px 0" }}
            className="section section-lg section-shaped pg-250"
          >
            <ul>
              {x.content
                .sort((a, b) => {
                  if (a.date > b.date) return -1;
                  if (a.date < b.date) return 1;

                  return 0;
                })
                .map(x => ({ ...x, ...{ date: moment(x.date) } }))
                .map(x => (
                  <li>
                    <a href={require("../assets/" + x.url)}>
                      {x.date.format("dddd, DD/MM/YYYY")}
                    </a>
                  </li>
                ))}
            </ul>
          </section>
        </>
      ))}
    </>
  );
};
