import React from "react";
import Slider from "react-slick";
import { H2, Text } from "../components/Titles";
import { Row, Card, CardTitle, CardText } from "reactstrap";

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
                    <div style={{ padding: "0px 20px" }}>
                      {e.image ? (
                        Array.isArray(e.image) ? (
                          <Slider
                            infinite={true}
                            slidesToShow={1}
                            arrows={true}
                            dots={false}
                            speed={2500}
                            autoplaySpeed={3500}
                          >
                            {e.image.map(x => (
                              <img className="w-100" src={x} />
                            ))}
                          </Slider>
                        ) : (
                          <img className="w-100" src={e.image} />
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
