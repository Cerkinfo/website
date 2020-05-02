import React, { useState } from "react";
import Slider from "react-slick";
import { H2, Text } from "../components/Titles";
import {
  Button,
  Card,
  CardTitle,
  CardText,
  Modal,
  ModalBody,
  ModalFooter,
  Row,
} from "reactstrap";

const Enhance = ({ src }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <img className="w-100" onClick={toggle} src={src} />
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody>
          <img className="w-100" onClick={toggle} src={src} />
        </ModalBody>
        <ModalFooter>
          <Button onClick={toggle}>Fermer</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

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
                {e.content || e.image ? (
                  <CardText>
                    {typeof e.content == "string" ? (
                      <Text>{e.content}</Text>
                    ) : (
                      e.content
                    )}
                    <div style={{ padding: "0px 20px", paddingTop: "10px" }}>
                      {e.image ? (
                        Array.isArray(e.image) ? (
                          <Slider
                            infinite={true}
                            slidesToShow={1}
                            arrows={true}
                            dots={false}
                            fade={true}
                            centerMode={true}
                            draggable={false}
                            swipe={false}
                            touchMove={false}
                            speed={1000}
                          >
                            {e.image.map((x) => (
                              <img className="w-100" src={x} />
                            ))}
                          </Slider>
                        ) : (
                          <Enhance src={e.image} />
                        )
                      ) : null}
                    </div>
                  </CardText>
                ) : null}
              </Card>
            </Row>
          </div>
        </li>
      ))}
    </ul>
  );
};
