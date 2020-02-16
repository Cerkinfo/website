import React, { useEffect } from 'react';
import Headroom from "react-headroom";
import {
  Button,
  UncontrolledCollapse,
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
import NavSocial from './NavSocial';
import SETTINGS from '../settings';

export default () => {
  return (
    <Headroom>
      <Navbar
        className="navbar-main navbar-transparent navbar-light headroom"
        expand="lg"
        id="navbar-main"
      >
        <NavbarBrand to="/">
          <img
            alt={SETTINGS.title}
            src={require("../assets/img/logo.png")}
          />
        </NavbarBrand>
        <button className="navbar-toggler" id="navbar_global">
          <span className="navbar-toggler-icon" />
        </button>
        <UncontrolledCollapse navbar toggler="#navbar_global">
          <Nav className="align-items-lg-center ml-lg-auto" navbar>
            <NavItem>
              <NavLink href="/#what">Quoi ?</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/#project">Projet</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/#contact">Contacter</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://docs.google.com/forms/d/e/1FAIpQLSe_QIafRtkXuzgfCBS_rVDQD2_rYNfM3dV2KDE-ScZzbH4A3g/viewform?fbclid=IwAR2IFavPX5S6HiWxhvzqY8Ft0xeg31sXrYpcL_CPhP_zQLnUGSTLS6QY_9E">Commander</NavLink>
            </NavItem>
            <NavSocial/>
          </Nav>
        </UncontrolledCollapse>
      </Navbar>
    </Headroom>
  );
}
