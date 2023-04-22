import React from "react";
import Headroom from "react-headroom";
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  Nav
} from "reactstrap";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import NavSocial from "./NavSocial";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SETTINGS from "../settings";

const NavLink = ({ to, children }) => (
  <NavHashLink activeClassName="" className="font-white nav-link" to={to}>
    {children}
  </NavHashLink>
);

const NavLinkD = ({ to, children }) => (
  <NavHashLink activeClassName="" className="font-white dropdown-item" to={to}>
    {children}
  </NavHashLink>
);

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
            <img alt={SETTINGS.title} src={require("../assets/img/logo.png")} />
          </Link>
        </NavbarBrand>
        <button className="navbar-toggler" id="navbar_global">
          <span className="navbar-toggler-icon" />
        </button>
        <UncontrolledCollapse navbar toggler="#navbar_global">
          <Nav className="align-items-lg-center ml-lg-auto" navbar>
            <UncontrolledDropdown>
              <DropdownToggle caret="true" drop="down">Le Cercle </DropdownToggle>
              <DropdownMenu>
                <NavLinkD to="/#news">News</NavLinkD>
                <NavLinkD to="/#cercle">{"C'est quoi"}</NavLinkD>
                <NavLinkD to="/#urlab">Urlab</NavLinkD>
                <NavLinkD to="/#dochub"> Dochub </NavLinkD>
                <NavLinkD to="/#gates">Guilde Gates</NavLinkD>
                <NavLinkD to="/#babbage">Babbage</NavLinkD>
                <NavLinkD to="/#location">Notre Local</NavLinkD>
                <NavLinkD to="/admin/statuts">Statuts</NavLinkD>
                <NavLinkD to="/admin/roi">ROI</NavLinkD>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink to="/history">Historique</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/pv">PV</NavLink>
            </NavItem>
            <NavSocial color="white" />
          </Nav>
        </UncontrolledCollapse>
      </Navbar>
    </Headroom>
  );
};
