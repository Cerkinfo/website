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

export default () => {
  return (
    <>
      <section className="section section-lg section-shaped pg-250 color-main">
        <Row className="align-items-center h-100 color-main">
          <Col lg="6">
            <H1 className="font-white">Le CI au fil du temps</H1>
          </Col>
          <Col lg="6" className="w-100 text-center">
            <Skew src={require("../assets/img/history.jpg")} />
          </Col>
        </Row>
      </section>
      <Separator title={"Historique du Cercle Informatique"} />
      <section className="section section-lg section-shaped pg-250">
        <div style={{ padding: "50px 50px" }}>
          <Timeline
            timeline={[
              {
                date: "1977",
                title: "Création du Cercle Informatique",
                content:
                  "Sous l'impulsion de Charles de Coster le 'Cercle Informatique', distinct du Cercle des Sciences est créé.",
                image: require("../assets/img/history/og_logo.jpg")
              },
              {
                date: "1978",
                title: "Officialisation du Cercle",
                content:
                  "L'association des cercles facultaires et la commission culturelle officialise l'association sous la présidence de Michèle Descy et Evelyne Engels. Le Cercle se situe alors à l'époque au deuxième étage du Centre de calcul de l'ULB au Solbosch."
              },
              {
                date: "1981",
                title: "Premier OS ou O.S à moelle",
                content:
                  "Appelé 'canal 69', puis 'le clou', l'O.S à Moelle l'Organe Officiel du Cercle Informatique prend son nom en 1981. Ce journal reflète l'esprit du CI axé sur l'autodérision et le second degré."
              },
              {
                date: "1984",
                title: "Déménagement à la Plaine",
                content:
                  "Suite au nombre croissant de personnes qui fréquentent le cercle, le centre de calcul interdit l'accès au Cercle à cause de ses activités qui ne conviennent pas à celle du Centre de calcul. Le Cercle va se voir attribuer son local actuel qui était anciennement utilisé par Radio Campus.",
                image: require("../assets/img/history/local.jpg")
              },
              {
                date: "1990",
                title: "Premier édition de la MTSM (Miss T-Shirt Mouillé)",
                content:
                  "Cet évènement qui aujourd'hui n'existe heureusement plus, avait lieu pendant la semaine folklorique au second quadrimestre et consistait comme son titre l'indique à renversé des seaux d'eau fraiche sur les participant.e.s et ainsi rendre leur T-Shirt transparant.",
                image: require("../assets/img/history/mtsm.jpg")
              },
              {
                date: "1993",
                title: "Création du Département Informatique",
                content:
                  "La section se détache du département de Mathématique et le Département Informatique est crée (DI)."
              },
              {
                date: "1997",
                title: "Création de l'ordre Babbage",
                content:
                  "Avec une allusion évidente à un des pionnier de l'informatique, l'Ordre veut rassembler les anciens étudiants et étudiants d'informatique ayant oeuvré pour le cercle ou le département."
              },
              {
                date: "1997",
                title: "Premier Bal Informatique et Forum de l'emploi",
                content:
                  "Ce premier bal était précédé à l'époque d'un forum de l'emploi qui mettait en relation les étudiants d'informatique avec les entreprises. Cet évènement a été par la suite séparé en deux évènements distincts. Aujourd'hui le forum de l'emploi n'existe plus sous sa forme original mais a été repris par le Cercle des Sciences pour offrir une Jobfair pour l'ensemble de la facultée.",
                image: require("../assets/img/history/forum.jpg")
              },
              {
                date: "2001",
                title: "Première édition du OSDEM",
                content:
                  "Première édition de la conférence aujourd'hui connue sous le nom de 'FOSDEM' organisé avec la collaboration des étudiants du Cercle Informatique.",
                image: require("../assets/img/history/osdem.png")
              },
              {
                date: "2003",
                title: "Création de la Guilde Gates",
                content: "",
                image: require("../assets/img/history/cantux.jpg")
              },
              {
                date: "2012",
                title: "Création du Hackerspace",
                content:
                  "Le premier Hackerspace de l'ULB est créé par des étudiants du Cercle et prend place au 131 Avenue Buyl."
              }
            ]}
          />
        </div>
      </section>
    </>
  );
};
