import React from "react";
import { Separator, Timeline, Pdf } from "../components/";
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

const history = [
  {
    date: "1976",
    title: "Création du Cercle Informatique",
    content: (
      <>
        <p>
          Sous l'impulsion de Charles de Coster le 'Cercle Informatique',
          distinct du Cercle des Sciences est créé.
        </p>
        <p>
          Les activités de l'époque étaient les suivantes
          <ul>
            <li>Des thé-dansants (29 avril, 26 octobre , 2 décembre 1976)</li>
            <li>
              Un concert de jazz-rock en collaboration avec le CP dans
              l'auditoire Janson (15 décembre 1976).
            </li>
            <li>
              Exposition de dessins faits par ordinateur dans le cadre de la
              journée des 'Sciences du CdS (20 janvier 1977).
            </li>
            <li>
              Des activités pour les nouveaux élèves (faux cours, rallye café,
              parrainage facultaire, édition de notes de cours).
            </li>
            <li>Descente à Binche (2 mars 1976)</li>
            <li>Visite du centre de Calcul (septembre)</li>
            <li>
              De l'information sur les études d'informatique au près des
              étudiants en rhéto
            </li>
            <li>
              De l'aide aux utilisateurs du Centre de Calcul et l'édition un
              manuel d'utilisation pour les utilisateurs du Centre de Calcul
            </li>
            <li>Projection de films</li>
            <li>
              Des activités sportives (belote, tennis de table, descente de la
              Lesse)
            </li>
          </ul>
        </p>
      </>
    ),
    image: require("../assets/img/history/og_logo.png")
  },
  {
    date: "1978",
    title: "Officialisation du Cercle",
    content: (
      <>
        <p>
          L'association des cercles facultaires et la commission culturelle
          officialise l'association sous la présidence de Michèle Descy et
          Evelyne Engels. Le Cercle se situe alors à l'époque au deuxième étage
          du Centre de calcul de l'ULB au Solbosch.
        </p>
        <Pdf
          title={"Consulter le document qui acte la reconnaissance du Cercle"}
          file={require("../assets/pdf/history/1978_reconnaissance.pdf")}
        />
      </>
    )
  },
  {
    date: "1979",
    title: "Premier Baptême du Cercle Informatique",
    content:
      "Le Cercle voit l'intégration des nouveaux étudiants d'une matière différente et organise pour la première fois son baptême. Le nombre d'informaticiens baptisé au sein de la section était très faible le Cercle s'est donné pour objectif de faire revivre le folklore en son sein."
  },
  {
    date: "1984",
    title: "Déménagement à la Plaine",
    content:
      "Suite au nombre croissant de personnes qui fréquentent le cercle, le centre de calcul interdit l'accès au Cercle à cause de ses activités qui ne conviennent pas à celle du Centre de calcul. Le Cercle va se voir attribuer son local actuel qui était anciennement utilisé par Radio Campus.",
    image: require("../assets/img/history/local.jpg")
  },
  {
    date: "1985",
    title: "Premier OS ou O.S à moelle",
    content: (
      <>
        <p>
          Appelé 'canal 69', puis 'le clou', ou 'Canard Ile hareng', l'O.S à
          Moelle l'Organe Officiel du Cercle Informatique nait et prend son nom
          actuel.
        </p>
        <p>
          Ce journal reflète l'esprit du CI axé sur l'autodérision et le second
          degré.
        </p>
        <Pdf
          title={"Consulter une ancienne édition du 'Canard Ile hareng'"}
          file={require("../assets/pdf/history/1983_canard_ile.pdf")}
        />
      </>
    )
  },
  {
    date: "1990",
    title: "Première édition de la MTSM (Miss T-Shirt Mouillé)",
    content: (
      <>
        <p>
          Cet évènement qui aujourd'hui n'existe heureusement plus consistait
          comme son titre l'indique à renversé des seaux d'eau fraiche sur les
          participant.e.s et ainsi rendre leur T-Shirt transparant.
        </p>
        <p>
          L'évènement a d'abord eu lieu au premier quadrimestre pendant le mois
          de Décembre et a ensuite pendant la semaine folklorique au second
          quadrimestre.
        </p>
      </>
    ),
    image: [
      require("../assets/img/history/1992_mtsm.png"),
      require("../assets/img/history/mtsm.jpg"),
      require("../assets/img/history/mtsm3.jpg")
    ]
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
    content: (
      <>
        <p>
          Ce premier bal organisé pour le 20ème anniversaire du cercle était
          précédé à l'époque d'un forum de l'emploi qui mettait en relation les
          étudiants d'informatique avec les entreprises. Cet évènement a été par
          la suite séparé en deux évènements distincts. Aujourd'hui le forum de
          l'emploi n'existe plus sous sa forme original mais a été repris par le
          Cercle des Sciences pour offrir une Jobfair pour l'ensemble de la
          facultée.",
        </p>
        <Pdf
          title={"Consulter le 'Carnet de bal' de l'époque"}
          file={require("../assets/pdf/history/1997_bal.pdf")}
        />
      </>
    )
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
    image: require("../assets/img/history/cantux.png")
  },
  {
    date: "2005",
    title: "Première édition de la Glotte d'Or",
    content:
      "Évenement qui consiste à être le meilleur affoneur tout simplement",
    image: require("../assets/img/history/glottedor.jpg")
  },
  {
    date: "2012",
    title: "Création du hackerspace",
    content: (
      <>
        <p>
          le premier hackerspace de l'ulb est créé par des étudiants du cercle
          et prend place dans un local vide du 131 avenue buyl, dans les anciens
          locaux du cercle des étudiants étrangers.
        </p>
        <p>
          Le 131 Avenue Buyl a habrité à partir de 1991 les Cercle de Philo et
          Lettre au rez-de-chaussée, le Cercle de Psychologie au Premier étage
          ainsi que le Cercle de Médecine, Aggro et Science-Éco dans les étages
          supérieures. Déjà à l'époque des discussions était en cours pour
          fermer le bâtiment et y faire des rénovations.
        </p>
        <p>
          Ce local inoccupé a été trouvé après beaucoups de recherches, d'autres
          locaux notamment au NO ont été proposé mais ne convenait pas à pour
          l'usage d'un Hackerspace.
        </p>
        <p>
          Dés sa création le Hackerspace offre des soirées avec des mini
          conférences appelées 'SmartMonday' et des 'Workshops' aux étudiants
          d'informatique.
        </p>
      </>
    ),
    image: require("../assets/img/history/urlab.png")
  },
  {
    date: "2013",
    title: "Dernière édition de la MTSM",
    image: require("../assets/img/history/mtsm2.jpg")
  },
  {
    date: "2013",
    title: "Dernière édition de la Glotte d'Or",
    image: require("../assets/img/history/glottedor.jpg")
  },
  {
    date: "2018",
    title: "Un jeu vidéo pour la StV",
    content:
      "Visant à offrir une alternative aux classiques banderole et mettre en avant leur compétance en programmation le CI développe un jeu mobile pour la StV 2018 pour parler du thème de cette année: 'Librex bafoué, université engagés'.",
    image: require("../assets/img/history/app.png")
  }
];

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
          <Timeline timeline={history} />
        </div>
      </section>
    </>
  );
};
