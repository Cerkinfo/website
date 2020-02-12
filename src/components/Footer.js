import React from "react";
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center justify-content-md-between">
          <Col md="6">
            Réseau Atlas © {new Date().getFullYear()}
          </Col>
          <Col md="6">
            <Nav className=" nav-footer justify-content-end">
              <NavItem>
                <NavLink
                  href=""
                  target="_blank"
                >
                  MIT License
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="nav-link-icon"
                  href="https://www.facebook.com/reseauatlas"
                  id="facebooktooltip"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={['fab', 'facebook']} />
                  <span className="nav-link-inner--text d-lg-none ml-2">
                    Facebook
                  </span>
                </NavLink>
                <UncontrolledTooltip delay={0} target="facebooktooltip">
                  Suivez nous sur Facebook
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  className="nav-link-icon"
                  href="mailto:reseau.atlas@gmail.com"
                  id="mailtooltip"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={['fas', 'envelope']} />
                  <span className="nav-link-inner--text d-lg-none ml-2">
                    Mail
                  </span>
                </NavLink>
                <UncontrolledTooltip delay={0} target="mailtooltip">
                  Envoyez nous un email
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
