import React from "react";
import { Link, NavLink } from "react-router-dom";
import { List, Logo, Nav } from "./styles";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <Nav>
      <Logo>INVENTORY</Logo>
      <List>
        <li>
          {" "}
          <NavLink to="/">Home</NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink to="/login">Entrar</NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink to="/register">Cadastrar</NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink to="/about">Sobre</NavLink>{" "}
        </li>
      </List>
    </Nav>
  );
};

export default NavBar;
