import styled from "styled-components";
import { Button, Modal as ModalMUI, styled as styledMUI } from "@mui/material";

export const Modal = styledMUI(ModalMUI)`
   display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContainerButtons = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Confirm = styled.button`
  padding: 15px;
  border-radius: 15px;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.main.yellowGold};
  &:hover {
    background-color: #ecd64f96;
  }
`;

export const Cancel = styled.button`
  padding: 15px;
  border-radius: 15px;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.main.dark};
  &:hover {
    background-color: #62626296;
  }
`;
