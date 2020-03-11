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
  Row,
  NavLink,
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
                    Le cercle est une asbl qui a pour but de promouvoir le <b>folklore</b> et l'informatique auprès des étudiant.e.s.
                  </p>
                  <p>
                    Il organise diverses soirées (dont les fameux TDs) permettant de rencontrer d'autres étudiants ainsi qu'un <b>baptême</b>. 
                    Ce dernier, entouré de mystères, permet de créer des liens forts entre les étudiant.e.s y participant et de
                    découvrir le folklore estudiantin!
                  </p>
                  <p>
                    Le cercle participe à l'organisation du <a href="https://fosdem.org/" target="_blank">FOSDEM</a>, 
                    le plus grand évènement dédié au logiciel libre et gratuit en Europe.
                  </p>
                </Text>
              </Center>
            </Col>
          </Row>
        </div>
      </section>
      <section className="section section-lg section-shaped pg-250" id="project">
        <div className="h-100">
          <Row className="align-items-center">
            <Col lg="6" >
              <Floating>
                <Container>
                <Quote>
                  Des projets et du partage de connaissances autours de l'informatique!
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
                <H3>
                    Urlab: Le Hackerspace de l'ULB
                </H3>
                <Text>
                  <p>
                    Le hackerspace est un laboratoire où les étudiant.e.s intéressé.e.s par l'informatique et 
                    les nouvelles technologies peuvent se retrouver pour travailler ensemble sur des projets et 
                    partager leurs connaissances.
                  </p>
                  <p>
                    Il organise des évènements liés à l'informatique comme des ateliers (workshops) pour
                    apprendre à utiliser des outils informatiques, des frameworks, ...
                  </p>
                  <p>
                    Tous les premiers lundi de chaque mois, UrLab propose le Smartmonday. Il s'agit d'une soirée
                    où 3 conférences liées à l'informatique sont proposées. Ces évènements sont gratuits et en français!
                  </p>
                  <p>
                    Plus d'info sur <a href="https://urlab.be" target="_blank">leur site</a>.
                  </p>
                </Text>
              </Center>
            </Col>
          </Row>
        </div>
      </section>
      <section className="section section-lg section-shaped pg-250" id="project">
        <div className="h-100">
          <Row className="align-items-center">
            <Col lg="6" >
              <Floating>
                <Container>
                <Quote>
                  LE site pour partager ses notes de cours, de tps, ses corrections d'examens et bien plus !
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
      <section className="section section-lg section-shaped pg-250" id="project">
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
