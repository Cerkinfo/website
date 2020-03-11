import React from "react";
import Headroom from "react-headroom";
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  NavLink
} from "reactstrap";
import { NavHashLink } from "react-router-hash-link";
import NavSocial from "./NavSocial";
import SETTINGS from "../settings";

export default () => {
  return (
    <Headroom>
      <Navbar
        className="navbar-main navbar-transparent navbar-light headroom"
        expand="lg"
        id="navbar-main"
      >
        <NavbarBrand to="/">
          <a href="/">
            <img alt={SETTINGS.title} src={require("../assets/img/logo.png")} />
          </a>
        </NavbarBrand>
        <button className="navbar-toggler" id="navbar_global">
          <span className="navbar-toggler-icon" />
        </button>
        <UncontrolledCollapse navbar toggler="#navbar_global">
          <Nav className="align-items-lg-center ml-lg-auto" navbar>
            <NavItem>
              <NavLink>
                <NavHashLink className="font-white" smooth to="/#news">
                  News
                </NavHashLink>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <NavHashLink className="font-white" smooth to="/#cercle">
                  Le Cercle
                </NavHashLink>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <NavHashLink className="font-white" to="/history">
                  Historique
                </NavHashLink>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <NavHashLink className="font-white" to="/pv">
                  PV
                </NavHashLink>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <NavHashLink className="font-white" smooth to="/#contact">
                  Contacter
                </NavHashLink>
              </NavLink>
            </NavItem>
            <NavSocial />
          </Nav>
        </UncontrolledCollapse>
      </Navbar>
    </Headroom>
  );
};
