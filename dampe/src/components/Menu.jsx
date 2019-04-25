import React, { Component } from "react";
// import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default class Menu extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/process" activeClassName="active">
              Process
            </NavLink>
          </li>
          <li>
            <NavLink to="/photos" activeClassName="active">
              Photos
            </NavLink>
          </li>
          <li>
            <NavLink to="/team" activeClassName="active">
              Team
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
