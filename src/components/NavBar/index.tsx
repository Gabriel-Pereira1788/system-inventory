import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { RootState } from "../../store/store";
import { List, Logo, Nav } from "./styles";
import { BiUserCircle } from "react-icons/bi";
type Props = {};

const NavBar = (props: Props) => {
  const { user } = useSelector((slice: RootState) => slice.user);
  return (
    <Nav>
      <Logo>INVENTORY</Logo>
      {!user && (
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
      )}

      {user && (
        <List>
          <li>
            {" "}
            <NavLink to="/system">DashBoard</NavLink>{" "}
          </li>
          <li>
            {" "}
            <NavLink to="/system/produtos">Produtos</NavLink>{" "}
          </li>

          <li>
            {" "}
            <NavLink to="/about">Sobre</NavLink>{" "}
          </li>
          <li>
            <BiUserCircle />
          </li>
        </List>
      )}
    </Nav>
  );
};

export default NavBar;
