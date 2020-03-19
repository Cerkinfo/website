import React from "react";
import { NavItem, NavLink, UncontrolledTooltip } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SETTINGS from "../settings";

export default ({ color }) => (
  <>
    {SETTINGS.contact.facebook && (
      <NavItem>
        <NavLink
          className="nav-link-icon"
          style={{ color: color }}
          href={SETTINGS.contact.facebook}
          id="facebooktooltip"
          target="_blank"
        >
          <FontAwesomeIcon icon={["fab", "facebook"]} />
          <span className="nav-link-inner--text d-lg-none ml-2">Facebook</span>
        </NavLink>
        <UncontrolledTooltip delay={0} target="facebooktooltip">
          Suivez nous sur Facebook
        </UncontrolledTooltip>
      </NavItem>
    )}
    {SETTINGS.contact.instagram && (
      <NavItem>
        <NavLink
          className="nav-link-icon"
          style={{ color: color }}
          href={SETTINGS.contact.instagram}
          id="instagramtooltip"
          target="_blank"
        >
          <FontAwesomeIcon icon={["fab", "instagram"]} />
          <span className="nav-link-inner--text d-lg-none ml-2">Instagram</span>
        </NavLink>
        <UncontrolledTooltip delay={0} target="instagramtooltip">
          Suivez nous sur Instagram
        </UncontrolledTooltip>
      </NavItem>
    )}
    {SETTINGS.contact.discord && (
      <NavItem>
        <NavLink
          className="nav-link-icon"
          style={{ color: color }}
          href={SETTINGS.contact.discord}
          id="instagramtooltip"
          target="_blank"
        >
          <FontAwesomeIcon icon={["fab", "discord"]} />
          <span className="nav-link-inner--text d-lg-none ml-2">Discord</span>
        </NavLink>
        <UncontrolledTooltip delay={0} target="instagramtooltip">
          Rejoignez-nous sur Discord
        </UncontrolledTooltip>
      </NavItem>
    )}
    {SETTINGS.contact.email && (
      <NavItem>
        <NavLink
          className="nav-link-icon"
          style={{ color: color }}
          href={`mailto:${SETTINGS.contact.email}`}
          id="mailtooltip"
          target="_blank"
        >
          <FontAwesomeIcon icon={["fas", "envelope"]} />
          <span className="nav-link-inner--text d-lg-none ml-2">Mail</span>
        </NavLink>
        <UncontrolledTooltip delay={0} target="mailtooltip">
          Envoyez nous un email
        </UncontrolledTooltip>
      </NavItem>
    )}
  </>
);
