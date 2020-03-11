import React from 'react';
import Slider from "react-slick";
import { Banner, Contact, Map, Preview, Separator } from '../components/';
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
import SETTINGS from '../settings';
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
      <Separator title={"News"}/>
      <div id="news">
        <Slider infinite={true} slidesToShow={posts.length > 3 ? 3 : posts.length} dots={true}>
          {posts.map(post => <Preview {...post}/>)}
        </Slider>
      </div>
      <Separator title={"Le Cercle"}/>
      <section className="section section-lg section-shaped pg-250">
        <div className="h-100" id="cercle">
          <Row className="align-items-center">
            <Col lg="6" >
              <Overlay>
                <img src={require("../assets/img/landing1.png")} style={{width: "100%"}}/>
              </Overlay>
            </Col>
            <Col lg="6">
              <Center>
                <H3>Le Cercle Informatique c'est quoi ?</H3>
                <Text>
                  <p>
                    Le Cercle est une <i>ASBL</i> qui a pour but de promouvoir le <b>folklore</b> et l'informatique auprès des étudiant.e.s.
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
      <section className="section section-lg section-shaped pg-250">
        <div className="h-100" id="project">
          <Row className="align-items-center">
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
                  <Button href="https://urlab.be" block>Leur site</Button>
                </Text>
              </Center>
            </Col>
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
                <img src={require("../assets/img/landing1.png")} style={{width: "100%"}}/>
              </Overlay>
            </Col>
            <Col lg="6">
              <Center>
                <H3>Dochub</H3>
                <Text>
                  <p>
                    {"Dochub est le site de partage de document créer par le Cercle Informatique. C'est un outil indispensable a la réussite que nous développons librement."}
                  </p>
                  <Button href="http://dochub.be/" block>Leur site</Button>
                </Text>
              </Center>
            </Col>
          </Row>
        </div>
      </section>
      <section className="section section-lg section-shaped pg-250" id="project">
        <div className="h-100">
          <Row className="align-items-center">
            <Col lg="6">
              <Center>
                <H3>La Guilde Gate</H3>
                <Text>
                  <p>
                  </p>
                </Text>
              </Center>
            </Col>
            <Col lg="6" >
              <Floating>
                <Container>
                <Quote>
                  Le folklore chantant a aussi sa place au CI
                </Quote>
                </Container>
              </Floating>
              <Overlay>
                <img src={require("../assets/img/landing1.png")} style={{width: "100%"}}/>
              </Overlay>
            </Col>
          </Row>
        </div>
      </section>
      <section className="section section-lg section-shaped pg-250" id="project">
        <div className="h-100">
          <Row className="align-items-center">
            <Col lg="6" >
              <Overlay>
                <img src={require("../assets/img/manneken.jpg")} style={{width: "100%"}}/>
              </Overlay>
            </Col>
            <Col lg="6">
              <Center>
                <H3>Babbage</H3>
                <Text>
                  <p>
                    L’Ordre de Babbage est l’association des anciens étudiants du Département d’Informatique de la Faculté des Sciences de l’Université libre de Bruxelles.
                  </p>
                  <p>
                    L’Ordre de Babbage organise des activités à destination des anciens étudiants, décerne son double prix Babbage, et s'occupe aussi des archives du département.
                  </p>
                  <p>
                    L’Ordre de Babbage décerne aussi des décorations appelées « vleks » aux étudiants ou anciens étudiants en sciences informatiques qui ont eu un rôle d’exception dans l’organisation du Cercle ou au sein du Département d’Informatique.
                  </p>
                  <Button href="http://babbage.ulb.be/" block>Leur site</Button>
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
              <Center className="font-white">
                <H3 className="text-center"><FontAwesomeIcon icon={['fas', 'address-card']} /> Nous contacter</H3>
                <Text>
                  <ul style={{listStyleType: "none"}}>
                    <li>Pour toutes vos questions sur ..</li>
                  </ul>
                  <ul>
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
