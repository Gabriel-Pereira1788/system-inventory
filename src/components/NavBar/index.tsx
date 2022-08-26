import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { RootState, useAppDispatch } from "../../store/store";
import { List, Logo, Nav, Card } from "./styles";
import { BiUserCircle } from "react-icons/bi";
import { logoutUser } from "../../store/User/User.store";
type Props = {};

const NavBar = (props: Props) => {
  const { user } = useSelector((slice: RootState) => slice.user);
  const dispatch = useAppDispatch();

  const handleLogoutUser = () => {
    dispatch(logoutUser());
  };
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
            <NavLink to="system">DashBoard</NavLink>{" "}
          </li>
          <li>
            {" "}
            <NavLink to="products">Produtos</NavLink>{" "}
          </li>

          <li>
            {" "}
            <NavLink to="/about">Sobre</NavLink>{" "}
          </li>
          <li>
            <BiUserCircle />
            <Card>
              <button onClick={handleLogoutUser}>sair</button>
            </Card>
          </li>
        </List>
      )}
    </Nav>
  );
};

export default NavBar;
