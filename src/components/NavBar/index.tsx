import React, { Dispatch, SetStateAction, useState } from "react";
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
import ModalUser from "../ModalUser";
type Props = {};

const NavBar = (props: Props) => {
  const { user } = useSelector((slice: RootState) => slice.user);
  const dispatch = useAppDispatch();

  const [openModalUser, setOpenModalUser] = useState(false);

  const handleToggleModal = (
    action: "open" | "close",
    fn: Dispatch<SetStateAction<boolean>>
  ) => {
    return () => {
      if (action === "open") fn(true);
      if (action === "close") fn(false);
    };
  };

  return (
    <>
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
              </li>
              <li onClick={handleToggleModal("open", setOpenModalUser)}>
                <WrapperIcon>
                  <AccountCircleIcon />
                </WrapperIcon>
              </li>
            </ContainerIcon>
          </List>
        )}
      </Nav>
      <ModalUser
        openModal={openModalUser}
        handleClose={handleToggleModal("close", setOpenModalUser)}
      />
    </>
  );
};

export default NavBar;
