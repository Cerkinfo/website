import React from 'react';
import Slider from "react-slick";
import { Banner, Contact, Map, Preview } from '../components/';
import { H3, Text, Center, Quote, Cite } from '../components/Titles';
import { Overlay, Floating } from '../components/Images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { filterPosts } from '../utils/content'
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
try {
  var SUMMARY_JSON = require('../assets/posts/summary.json');
} catch (e) {
  var SUMMARY_JSON = {fileMap: []};
}

export default () => {
  const posts = filterPosts(SUMMARY_JSON);

  return (
    <span>
      <Banner/>
      <Slider infinite={true} slidesToShow={posts.length > 3 ? 3 : posts.length} dots={true}>
        {posts.map(post => <Preview {...post}/>)}
      </Slider>
      <section className="section section-lg section-shaped pg-250" id="what">
        <div className="h-100">
          <Row className="align-items-center">
            <Col lg="6" >
              <Floating>
                <Container>
                <Quote>
                </Quote>
                <Cite>
                  UrLab
                </Cite>
                </Container>
              </Floating>
              <Overlay>
                <img src={require("../assets/img/landing1.jpg")} style={{width: "100%"}}/>
              </Overlay>
            </Col>
            <Col lg="6">
              <Center>
                <H3>Le Cercle Informatique c'est quoi ?</H3>
                <Text>
                  <p>
                  </p>
                </Text>
              </Center>
            </Col>
          </Row>
        </div>
      </section>
      <section className="section section-lg section-shaped pg-250" id="what">
        <div className="h-100">
          <Row className="align-items-center">
            <Col lg="6" >
              <Floating>
                <Container>
                <Quote>
                  Des projets et du partage de connaissances autours de l'informatique
                </Quote>
                <Cite>
                  UrLab
                </Cite>
                </Container>
              </Floating>
              <Overlay>
                <img src={require("../assets/img/UrLab.jpg")} style={{width: "100%"}}/>
              </Overlay>
            </Col>
            <Col lg="6">
              <Center>
                <H3>Urlab: Le Hackerspace de l'ULB</H3>
                <Text>
                  <p>
                  </p>
                </Text>
              </Center>
            </Col>
          </Row>
        </div>
      </section>
      <section className="section section-lg section-shaped pg-250" id="what">
        <div className="h-100">
          <Row className="align-items-center">
            <Col lg="6" >
              <Floating>
                <Container>
                <Quote>
                  LE site pour partager ses notes de cours, de tp, ses corrections d'examens et bien plus !
                </Quote>
                </Container>
              </Floating>
              <Overlay>
                <img src={require("../assets/img/landing1.jpg")} style={{width: "100%"}}/>
              </Overlay>
            </Col>
            <Col lg="6">
              <Center>
                <H3>Dochub</H3>
                <Text>
                  <p>
                  </p>
                </Text>
              </Center>
            </Col>
          </Row>
        </div>
      </section>
      <section className="section section-lg section-shaped pg-250" id="what">
        <div className="h-100">
          <Row className="align-items-center">
            <Col lg="6" >
              <Floating>
                <Container>
                <Quote>
                  Des vies fauchées trop tôt, en partie car certaines mesures structurelles ne sont pas décidées ou appliquées
                </Quote>
                </Container>
              </Floating>
              <Overlay>
                <img src={require("../assets/img/landing1.jpg")} style={{width: "100%"}}/>
              </Overlay>
            </Col>
            <Col lg="6">
              <Center>
                <H3>La Guilde Gate</H3>
                <Text>
                  <p>
                  </p>
                </Text>
              </Center>
            </Col>
          </Row>
        </div>
      </section>

      <Map/>
      <section className="section section-lg section-shaped pg-250 color-main">
        <div id="contact" className="h-100">
          <Row className="align-items-center">
            <Col lg="6">
              <Center>
                <H3><FontAwesomeIcon icon={['fas', 'address-card']} /> Nous contacter</H3>
                <Text>
                  Pour toutes vos questions sur ..
                  <ul style={{listStyleType: "none"}}>
                    <li>le Cercle Informatique</li>
                    <li>Nos activités</li>
                    <li>Nos projets </li>
                  </ul>
                </Text>
              </Center>
            </Col>
            <Col lg="6">
              <Contact />
            </Col>
          </Row>
        </div>
      </section>
    </span>
  );
}
