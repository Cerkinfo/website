import React from 'react';
import Slider from "react-slick";
import { Banner, Announce, Contact, Map, Preview } from '../components/';
import { H3, Text, Center, Quote, Cite } from '../components/Titles';
import { Overlay, Floating } from '../components/Images';
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
      <Announce/>
      <section className="section section-lg section-shaped pg-250" id="what">
        <div className="h-100">
          <Row className="align-items-center">
            <Col lg="6" >
              <Floating>
                <Container>
                <Quote>
                  Des vies fauchées trop tôt, en partie car certaines mesures structurelles ne sont pas décidées ou appliquées
                </Quote>
                <Cite>
                  Collectif Morts de la Rue
                </Cite>
                </Container>
              </Floating>
              <Overlay>
                <img src={require("../assets/img/landing1.jpg")} style={{width: "100%"}}/>
              </Overlay>
            </Col>
            <Col lg="6">
              <Center>
                <H3>Réseaux Atlas c'est quoi ?</H3>
                <Text>
                  <p>
                  Notre mission est de fournir des <it>informations</it> et
                  des <it>solutions</it> innovantes pour aider à la crise
                  des sans-abris, migrants,
                  sans-papiers et réfugiés en Belgique. Nous mettons l'accent
                  sur leurs droits, l'accès à un logement et à de la nourriture
                  ainsi qu'à leur intégration sociale.
                  </p>
                  <p>
                  Nous voulons sensibiliser et mettre en lumière les morts de
                  la rue, que l'on compte tout au long de l'année sur nos
                  trottoirs, à travers différentes campagnes et événements afin
                  de rapprocher les citoyens bruxellois et
                  les personnes sans abrix.
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
            <Col lg="6">
              <Center>
                <H3>Notre projet</H3>
                <Text>
                  <p>
                    Notre idée est de faire brasser une bière dont les bénéfices
                    sont versés au <a href="">Collectif Morts de la Rue</a> et
                    ainsi atteindre notre objectif de 5000€ cette année.
                  </p>
                  <p>
                    Vous pouvez commandez dés maintenant des cartons de bière
                    spéciale «Zinnebir», de la Brasserie de la Senne, étiquetée
                    au soutien du Collectif Morts de la Rue.
                  </p>
                  <Button href="https://frama.link/ebrzmRwV" block>Commander</Button>
                </Text>
              </Center>
            </Col>
            <Col lg="6" >
              <Floating>
                <Container>
                <Quote>
                  Avant le collectif, les personnes sans-abris ne mourraient pas, elle disparaissaient simplement.
                </Quote>
                <Cite>
                  Collectif Morts de la Rue
                </Cite>
                </Container>
              </Floating>
              <Overlay>
                <img src={require("../assets/img/landing4.jpg")} style={{width: "100%"}}/>
              </Overlay>
            </Col>
          </Row>
        </div>
      </section>
      <section className="section section-lg section-shaped pg-250" id="mdr">
        <div className="h-100">
          <Row className="align-items-center">
            <Col lg="6" >
              <Floating>
                <Container>
                <Quote>
                  Agir pour un adieu digne pour les habitants de la rue en région bruxelloise
                </Quote>
                <Cite>
                  Collectif Morts de la Rue
                </Cite>
                </Container>
              </Floating>
              <Overlay>
                <img src={require("../assets/img/landing3.jpg")} style={{width: "100%"}}/>
              </Overlay>
            </Col>
            <Col lg="6">
              <Center>
                <H3>Collectif Morts de la Rue</H3>
                <Text>
                  <p>
                    Nous avons choisis avec ce projet de bière solidaire de mettre
                    en lumière le travail d'un collectif bruxellois qui mène des actions
                    pour:
                  </p>
                  <ul>
                    <li>Offrir des funérailles dignes aux morts de la rue</li>
                    <li>Accompagner les proches en deuil</li>
                    <li>Dénoncer et communiquer autour des causes de mortalité</li>
                    <li>Organiser des cérémonie en hommage aux morts de la rue</li>
                  </ul>
                  <Button href="http://mortsdelarue.brussels/" block>Plus d'infos</Button>
                </Text>
              </Center>
            </Col>
          </Row>
        </div>
      </section>
      <Map/>
      <Contact />
      <Slider infinite={true} slidesToShow={posts.length > 3 ? 3 : posts.length} dots={true}>
        {posts.map(post => <Preview {...post}/>)}
      </Slider>
    </span>
  );
}
