import React from "react";
import Slider from "react-slick";
import { Banner, Contact, Map, Preview, Separator } from "../components/";
import { H3, Text, Center, Quote, Cite } from "../components/Titles";
import { Overlay, Floating } from "../components/Images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { filterPosts } from "../utils/content";
import { Button, Container, Col, Row } from "reactstrap";
import { Helmet } from "react-helmet";
try {
  var SUMMARY_JSON = require("../assets/posts/summary.json");
} catch (e) {
  var SUMMARY_JSON = { fileMap: [] };
}

export default () => {
  const posts = filterPosts(SUMMARY_JSON);

  return (
    <span>
      <Helmet>
        <title>Cercle Informatique - Accueil</title>
      </Helmet>
      <Banner />
      <Separator title={"News"} />
      <div id="news">
        <Slider
          infinite={true}
          slidesToShow={posts.length > 3 ? 3 : posts.length}
          dots={true}
        >
          {posts.map((post) => (
            <Preview {...post} />
          ))}
        </Slider>
      </div>
      <Separator title={"Le Cercle"} />
      <section className="section section-lg section-shaped pg-250">
        <div className="h-100" id="cercle">
          <Row className="align-items-center">
            <Col lg="6">
              <Floating className="w-100">
                <img
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                  className="w-75"
                  src={require("../assets/img/poil.svg")}
                />
              </Floating>
              <Overlay>
                <img
                  src={require("../assets/img/landing1.png")}
                  style={{ width: "100%" }}
                />
              </Overlay>
            </Col>
            <Col lg="6">
              <Center>
                <H3>Le Cercle Informatique c'est quoi ?</H3>
                <Text>
                  <p>
                    Le Cercle est une <i>ASBL</i> qui a pour but de promouvoir
                    le <b>folklore</b> et l'informatique auprès des étudiant.e.s
                    de l'ULB.
                  </p>
                  <p>
                    Il organise diverses soirées (dont les fameux TDs)
                    permettant de rencontrer d'autres étudiant.e.s ainsi qu'un{" "}
                    <b>baptême</b>. Ce dernier, entouré de mystère, permet de
                    créer des liens forts entre les étudiant.e.s y participant
                    et de découvrir le folklore estudiantin!
                  </p>
                  <p>
                    Le cercle participe à l'organisation du{" "}
                    <a href="https://fosdem.org/" target="_blank">
                      FOSDEM
                    </a>
                    , le plus grand évènement dédié au logiciel libre et gratuit
                    en Europe.
                  </p>
                </Text>
              </Center>
            </Col>
          </Row>
        </div>
      </section>
      <section className="section section-lg section-shaped pg-250">
        <div className="h-100" id="urlab">
          <Row className="align-items-center">
            <Col lg="6">
              <Center>
                <H3>Urlab: Le Hackerspace de l'ULB</H3>
                <Text>
                  <p>
                    Le hackerspace est un laboratoire où les étudiant.e.s
                    intéressé.e.s par l'informatique et les nouvelles
                    technologies peuvent se retrouver pour travailler ensemble
                    sur des projets et partager leurs connaissances.
                  </p>
                  <p>
                    Il organise des évènements liés à l'informatique comme des
                    ateliers (workshops) pour apprendre à utiliser des outils
                    informatiques, des frameworks, ...
                  </p>
                  <p>
                    Tous les premiers lundi de chaque mois, UrLab propose le
                    Smartmonday. Il s'agit d'une soirée où 3 conférences liées à
                    l'informatique sont proposées. Ces évènements sont gratuits
                    et en français!
                  </p>
                  <Button href="https://urlab.be" block>
                    Leur site
                  </Button>
                </Text>
              </Center>
            </Col>
            <Col lg="6">
              <Floating>
                <Container>
                  <Quote>
                    Des projets et du partage de connaissances autours de
                    l'informatique!
                  </Quote>
                  <Cite>UrLab</Cite>
                </Container>
              </Floating>
              <Overlay>
                <img
                  src={require("../assets/img/UrLab.jpg")}
                  style={{ width: "100%" }}
                />
              </Overlay>
            </Col>
          </Row>
        </div>
      </section>
      <section className="section section-lg section-shaped pg-250">
        <div className="h-100" id="dochub">
          <Row className="align-items-center">
            <Col lg="6">
              <Floating>
                <Container>
                  <Quote>
                    LE site pour partager ses notes de cours, de tps, ses
                    corrections d'examens et bien plus !
                  </Quote>
                </Container>
              </Floating>
              <Overlay>
                <img
                  src={require("../assets/img/dochub.jpg")}
                  style={{ width: "100%" }}
                />
              </Overlay>
            </Col>
            <Col lg="6">
              <Center>
                <H3>Dochub</H3>
                <Text>
                  <p>
                    Dochub est le site de partage de résumés, anciens examens,
                    corrigés, ... créer par le Cercle Informatique et utilisé
                    par plusieurs milliers d'étudiant.e.s de toutes les facultés
                    de l'ULB.
                  </p>
                  <p>
                    C'est un outil indispensable à la réussite qui est développé
                    en accord avec nos valeurs, de manière totalement{" "}
                    <a href="https://github.com/urlab/dochub">open source</a>.
                  </p>
                  <Button href="http://dochub.be/" block>
                    Dochub
                  </Button>
                </Text>
              </Center>
            </Col>
          </Row>
        </div>
      </section>
      <section className="section section-lg section-shaped pg-250">
        <div className="h-100" id="gates">
          <Row className="align-items-center">
            <Col lg="6">
              <Center>
                <H3>La Guilde Gates</H3>
                <Text>
                  <p>
                    La Guilde Gates, fondée en 2003, est une corporation
                    d'étudiant.e.s, ancien.ne.s étudiant.e.s et amis du Cercle
                    Informatique, organisant régulièrement des soirées appelées
                    « CantuX » au cours desquelles les participants entonnent
                    des chants traditionnels tout en buvant de la bière.
                  </p>
                  <p>
                    Les CantuX sont cependant bien plus que de simples soirées
                    chantantes et bibitives : ils s’inscrivent dans le cadre
                    large et très varié du folklore estudiantin belge.
                  </p>
                </Text>
              </Center>
            </Col>
            <Col lg="6">
              <img
                style={{
                  zIndex: 1,
                  left: "25%",
                  position: "absolute",
                }}
                className="w-50"
                src={require("../assets/img/cantux.svg")}
              />
              <Overlay>
                <Slider
                  infinite={true}
                  slidesToShow={1}
                  dots={false}
                  speed={2500}
                  autoplaySpeed={3500}
                  fade={true}
                  autoplay={true}
                  arrows={false}
                >
                  <img
                    src={require("../assets/img/cantux/1.jpg")}
                    style={{ width: "100%" }}
                  />
                  <img
                    src={require("../assets/img/cantux/2.jpg")}
                    style={{ width: "100%" }}
                  />
                  <img
                    src={require("../assets/img/cantux/3.jpg")}
                    style={{ width: "100%" }}
                  />
                </Slider>
              </Overlay>
            </Col>
          </Row>
        </div>
      </section>
      <section className="section section-lg section-shaped pg-250">
        <div className="h-100" id="babbage">
          <Row className="align-items-center">
            <Col lg="6">
              <Overlay>
                <img
                  src={require("../assets/img/manneken.jpg")}
                  style={{ width: "100%" }}
                />
              </Overlay>
            </Col>
            <Col lg="6">
              <Center>
                <H3>Babbage</H3>
                <Text>
                  <p>
                    L’Ordre de Babbage est l’association des ancien.ne.s
                    étudiant.e.s du département d’informatique de la faculté des
                    sciences de l’Université Libre de Bruxelles.
                  </p>
                  <p>
                    L’Ordre de Babbage organise des activités à destination des
                    ancien.e.s étudiant.e.s, décerne son double prix Babbage, et
                    s'occupe aussi des archives du département.
                  </p>
                  <p>
                    L’Ordre de Babbage décerne aussi des décorations appelées «
                    vleks » aux étudiant.e.s ou ancien.ne.s étudiant.e.s en
                    sciences informatiques qui ont eu un rôle d’exception dans
                    l’organisation du cercle ou au sein du département
                    d’informatique.
                  </p>
                  <Button href="http://babbage.ulb.be/" block>
                    Leur site
                  </Button>
                </Text>
              </Center>
            </Col>
          </Row>
        </div>
      </section>
      <Map id="location" />
      <section className="section section-lg section-shaped pg-250 color-main">
        <div id="contact" className="h-100">
          <Row className="align-items-center">
            <Col lg="6">
              <Center className="font-white">
                <H3 className="text-center">
                  <FontAwesomeIcon icon={["fas", "address-card"]} /> Nous
                  contacter
                </H3>
                <Text>
                  <ul style={{ listStyleType: "none" }}>
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
};
