import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { RootState, useAppDispatch } from "../../store/store";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";
import {
  List,
  Logo,
  Nav,
  Card,
  WrapperIcon,
  ContainerIcon,
  ContainerLinks,
} from "./styles";
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
      {!user && (
        <>
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
        </>
      )}

      {user && (
        <List content="center">
          <ContainerLinks>
            <li>
              {" "}
              <NavLink to="system">Painel de controle</NavLink>{" "}
            </li>
            <li>
              {" "}
              <NavLink to="products">Produtos</NavLink>{" "}
            </li>

            <li>
              {" "}
              <NavLink to="/about">Sobre</NavLink>{" "}
            </li>
          </ContainerLinks>
          <ContainerIcon>
            <li>
              <WrapperIcon>
                <NotificationImportantIcon />
              </WrapperIcon>
              <Card>
                <button onClick={handleLogoutUser}>sair</button>
              </Card>
            </li>
            <li>
              <WrapperIcon>
                <AccountCircleIcon />
              </WrapperIcon>
            </li>
          </ContainerIcon>
        </List>
      )}
    </Nav>
  );
};

export default NavBar;
