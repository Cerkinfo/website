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
  DropdownItem,
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
            <UncontrolledDropdown>
              <DropdownToggle>Le Cercle</DropdownToggle>
              <DropdownMenu>
                <DropdownItem className="font-white" href="/#news">
                  News
                </DropdownItem>
                <DropdownItem className="font-white" href="/#cercle">
                  {"C'est quoi"}
                </DropdownItem>
                <DropdownItem className="font-white" href="/#urlab">
                  Urlab
                </DropdownItem>
                <DropdownItem className="font-white" href="/#dochub">
                  Dochub
                </DropdownItem>
                <DropdownItem className="font-white" href="/#gates">
                  Guilde Gates
                </DropdownItem>
                <DropdownItem className="font-white" href="/#babbage">
                  Babbage
                </DropdownItem>
                <DropdownItem className="font-white" href="/#location">
                  Notre Local
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/history" className="font-white">
                Historique
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/pv" className="font-white">
                PV
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/#contact" className="font-white">
                Contacter
              </NavLink>
            </NavItem>
            <NavSocial />
          </Nav>
        </UncontrolledCollapse>
      </Navbar>
    </Headroom>
  );
};
