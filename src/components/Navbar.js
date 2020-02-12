import React, { useEffect } from 'react';
import Headroom from "react-headroom";
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";


export default () => {
  return (
    <Headroom>
      <Navbar
        className="navbar-main navbar-transparent navbar-light headroom"
        expand="lg"
        id="navbar-main"
      >
        <NavbarBrand to="/">
          <Link to="/">
            <img
              alt="Réseau Atlas"
              src={require("../assets/img/logo.png")}
            />
          </Link>
        </NavbarBrand>
        <button className="navbar-toggler" id="navbar_global">
          <span className="navbar-toggler-icon" />
        </button>
        <UncontrolledCollapse navbar toggler="#navbar_global">
          <Nav className="align-items-lg-center ml-lg-auto" navbar>
            <NavItem>
              <NavLink href="/">Events</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact">Contacter</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://docs.google.com/forms/d/e/1FAIpQLSe_QIafRtkXuzgfCBS_rVDQD2_rYNfM3dV2KDE-ScZzbH4A3g/viewform?fbclid=IwAR2IFavPX5S6HiWxhvzqY8Ft0xeg31sXrYpcL_CPhP_zQLnUGSTLS6QY_9E">Commander</NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="nav-link-icon"
                href="https://www.facebook.com/reseauatlas/"
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
        </UncontrolledCollapse>
      </Navbar>
    </Headroom>
  );
}
