import React, { Component } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";

class Header extends Component {
  render() {
    const theme = this.props.theme;
    const link = settings.isSplash ? "/splash" : "home";
    return (
      <Fade top duration={1000} distance="20px">
        <SeoHeader />
        <div>
          <header className="header">
            <NavLink
              target="_blank"
              rel="noopener noreferrer"
              to={link}
              tag={Link}
              className="logo"
            >
              <span className="logo-mark">SK</span>
              <span className="logo-copy">
                <b>{greeting.logo_name}</b>
                <small>BACKEND / SYSTEMS</small>
              </span>
            </NavLink>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon"></span>
            </label>
            <ul className="menu">
              <li>
                <NavLink
                  target="_blank"
                  rel="noopener noreferrer"
                  to="/home"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  target="_blank"
                  rel="noopener noreferrer"
                  to="/education"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                >
                  Education
                </NavLink>
              </li>
              <li>
                <NavLink
                  target="_blank"
                  rel="noopener noreferrer"
                  to="/experience"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                >
                  Experience
                </NavLink>
              </li>
              <li>
                <NavLink
                  target="_blank"
                  rel="noopener noreferrer"
                  to="/projects"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                >
                  Projects/ Roadmaps
                </NavLink>
              </li>

              <li>
                <NavLink
                  target="_blank"
                  rel="noopener noreferrer"
                  to="/contact"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                >
                  Contact Me
                </NavLink>
              </li>
            </ul>
          </header>
        </div>
      </Fade>
    );
  }
}
export default Header;
