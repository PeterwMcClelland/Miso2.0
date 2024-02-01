import React from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faInstagram, faSquareFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";


import { useMatch } from "react-router-dom";

const insta = <FontAwesomeIcon icon={faInstagram} />
const facebook = <FontAwesomeIcon icon={faSquareFacebook} />
const twitter = <FontAwesomeIcon icon={faTwitter} />

function HeaderLink({ to, children }) {
  let match = useMatch(to);
  return (
    <NavLink
      to={to}
      style={match ? { color: "#e93f3f" } : { color: "antiquewhite" }}
    >
      {children}
    </NavLink>
  );
}

function Header() {
  const [showNav, setShowNav] = React.useState(false);

  return (
    <div>
      <header className="header">
        <NavLink className="header-icon" to="/">
          MOSO <span className="title-small">Presents</span>
        </NavLink>
        <button className="mobile-menu-toggle" onClick={() => setShowNav(!showNav)}>
          ☰
        </button>
        <div className={`nav-links ${showNav ? 'active' : ''}`}>
          <div className="icons">{insta}</div>
          <div className="icons">{twitter}</div>
          <div className="icons">{facebook}</div>
          <HeaderLink to="/contact">+Contact</HeaderLink>
        </div>
      </header>
    </div>
  );
}

export default Header;
