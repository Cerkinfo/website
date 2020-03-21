import React from "react";
import { Separator, Timeline, Pdf } from "../components/";
import { H1 } from "../components/Titles";
import { Skew } from "../components/Images";
import { Row, Col } from "reactstrap";
import { Helmet } from "react-helmet";

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
    date: "1985",
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
    date: "1988",
    title: "Baptême 1988: La Guerre des Genes",
    content: (
      <>
        <p>Une anciènne affiche d'un baptême CI de l'époque.</p>
      </>
    ),
    image: require("../assets/img/history/1988_bapteme.png")
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
      require("../assets/img/history/mtsm3.jpg"),
      require("../assets/img/history/2006_mtsm.png")
    ]
  },
  {
    date: "1992",
    title: "Un logo à la pointe de la technologie",
    content: (
      <>
        <p>Un témoignage d'époque qui explique l'historique de ce logo</p>
        <h3>Un logo pour le Cercle Informatique</h3>
        <p>
          Le Cercle Informatique possède un logo à la gloire de sa grandeur.
          Toujours à la pointe de la technologie informatique, ce logo à été
          réalisé en utilisant des techniques de pointes en matière d'images de
          synthèse.
        </p>
        <h3>Historique </h3>
        <p>
          Le logo du Cercle Informatique vraisemblablement à été réalisé au
          début de l'année académique 1992-1993. La première version de ce logo
          était destinée à la création d'annimation et constituait pour moi un
          exercice d'utilisation du programme de Raytracing POV-Ray. Il n'a pas
          fallu longtemps pour que John Rizzo s'empare de mes sources et
          expérimente différentes textures pour le logo. A l'époque le Cercle
          Informatique disposait sans doute déjà de son ordinateur et c'est sur
          celui-ci que furent réaliser les premiers logos utilisés ensuite pour
          des lettres ou pour des affiches. Parallèlement à cela, je développait
          mon propre format d'animation utilisant la delta-compression et je
          mettait au point un programme faissant tourner le logo du Cercle
          Informatique sur un écrant en mode VGA. Longtemps après, en 1997, les
          sources pour le programme POV-Ray du logo du Cercle Informatique ont
          sans doute été perdue. C'est avec horreur que j'ai apeçu les
          tentatives de rotation du logo du Cercle Informatique sur les
          premières versions du site officiel du Cercle Informatique. Peu de
          temps après, j'ai commencé à être contacté à plusieurs reprises pour
          me demander de retrouver les fichiers originaux. Apparement, le Cercle
          Informatique utilisait une version plate du logo, ce qui ne permettait
          plus de l'animé en trois dimention, ni de l'imprimer en haute
          résolution. Finalement, après de longue recherche dans mes piles de
          disquettes, j'ai retrouvé mes sources. Afin de les remettres au goût
          du jour et de les offrir au Cercle Informatique, j'ai retravaillé les
          sources pour les adapter à la syntaxe de la version 2 de POV-Ray. J'en
          ai égallement profité pour réaliser une animation capable de remplacer
          au pied levé celle utilisée sur le site officiel de Cercle
          Informatique. Afin d'assurer que le logo ne soit plus perdu, j'ai
          assorti le don des sources du logo à quelques conditions qui je
          l'espère permetteront que celui-ci d'être amélioré tout en concervant
          son histoire.
        </p>
        <h3>Un peu de technique </h3>
        <p>
          Le programme POV-Ray est un programme de Raytracing. Il permet de
          réaliser des images de synthèse photoréalistes. Pour cela il faut
          décrire la scène que l'on veut représenter en utilisant des objets, ou
          forme, géométrique. Le programme POV-Ray permet ainsi de décrire un
          univers complexe et tridimentionnel à partir d'un simple fichier
          texte. La lettre I est consitué de l'union de trois cylindres, deux
          horizontaux et un vertical, pour réaliser le corps et de quatres
          sphères pour réaliser les bouts arrondis. La lettre C est formé à
          partir d'une tore. Cette tore est limité par de plan afin de créer
          l'ouverture sur la droite. Le C est également terminé par une union
          avec deux sphères pour former les bouts arrondis.
        </p>
      </>
    ),
    image: [
      require("../assets/img/history/logos/2/logoanim.gif"),
      require("../assets/img/history/logos/2/logocercle.gif"),
      require("../assets/img/history/logos/2/logosynthese.jpg"),
      require("../assets/img/history/logos/2/logosynthese2.jpg")
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
    date: "1999",
    title: "Un OS de rentrée de l'époque",
    content: (
      <>
        <p>
          Un petit aperçu de ce à quoi ressemblait l'OS pour la rentrée 1999
        </p>
        <Pdf
          title={"Consulter l'OS de rentrée de 1990"}
          file={require("../assets/pdf/history/1999_OS.pdf")}
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
    date: "2002",
    title: "Logo du Site en 2002",
    content: "Le logo utilisé sur le site 'cerkinfo' de l'époque",
    image: [
      require("../assets/img/history/logos/3/logo.jpg"),
      require("../assets/img/history/2002_site.png")
    ]
  },
  {
    date: "2003",
    title: "Nouveau logo",
    image: [
      require("../assets/img/history/logos/3/logo.png"),
      require("../assets/img/history/logos/3/noel.png")
    ]
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
    title: "Dernière édition de la Glotte d'Or"
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
      <Helmet>
        <title>Historique</title>
      </Helmet>
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
