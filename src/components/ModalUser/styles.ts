import styled from "styled-components";
import { Modal as ModalMUI, styled as styledMUI } from "@mui/material";

export const WrapperIcon = styled.div`
  margin: 5% 0%;
`;

export const UserContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`;

export const Modal = styledMUI(ModalMUI)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const UserName = styled.h3`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.main.yellowGold};
  font-size: clamp(1em, 2.5vw, 4em);
`;

export const UserEmail = styled.p`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.background};
  font-size: clamp(0.5em, 1.5vw, 1em);
`;

export const Logout = styled.button`
  border: none;
  outline: none;
  background: none;
  box-shadow: none;
  color: #000;
  &:hover {
    color: ${({ theme }) => theme.colors.main.yellowGold};
  }
`;
