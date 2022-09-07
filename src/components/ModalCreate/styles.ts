import { Button, Modal, styled as styledMUI } from "@mui/material";
import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* position: fixed; */
  /* top: 0; */
  width: 100%;
  height: 100%;
  /* z-index: 1; */
  /* background-color: #00000059; */
`;

export const Exit = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const ButtonExit = styled.button`
  color: red;
  font-weight: bold;
  padding: 10px;
  outline: none;
  border: none;
  background: none;
  box-shadow: none;
`;

export const ConfirmButton = styledMUI(Button)`
    background-color:#ECD64F;
    color:#fff;
    &:hover{
      background-color:#f3e06c;
    }

`;

export const ModalForm = styledMUI(Modal)`
   display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
