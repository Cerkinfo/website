import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "reactstrap";
import { H3 } from "../components/Titles";
import { withRouter } from "react-router-dom";
import { Helmet } from "react-helmet";

export default withRouter(props => {
  const [page, setPage] = useState(null);
  useEffect(() => {
    if (props.match.params && props.match.params.article) {
      try {
        setPage(require(`../assets/posts/${props.match.params.article}.json`));
      } catch (e) {
        props.history.replace("/404");
      }
    }
  });

  if (page) {
    return (
      <>
        <Helmet>
          <title>{page.title}</title>
        </Helmet>
        <div className="h-100">
          <Row className="w-100">
            <Col
              style={{ paddingTop: "300px", paddingBottom: "100px" }}
              lg="4"
              className="text-center color-main font-white"
            >
              <H3>{page.title}</H3>
            </Col>
            <Col style={{ marginTop: "100px" }} lg="8">
              <Container>
                <div dangerouslySetInnerHTML={{ __html: page.bodyHtml }}></div>
              </Container>
            </Col>
          </Row>
        </div>
      </>
    );
  } else {
    return (
      <Container className="text-center">
        <Spinner style={{ width: "3rem", height: "3rem" }} />
      </Container>
    );
  }
});
