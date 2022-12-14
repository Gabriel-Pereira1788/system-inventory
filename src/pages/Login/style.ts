import styled from "styled-components";
import { styled as styledMUI, Button, Box as BoxMUI } from "@mui/material";
import breakpoints from "../../constants/breakpoints";
export const Title = styled.h3`
  padding: 25px 0px;
  width: 90%;
  border-bottom: 1px solid #62626254;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.main.dark};
  font-style: uppercase;
  font-weight: bold;
  text-align: center;
`;

export const ContainerTitle = styled.div`
  width: 100%;
  margin: 10% 0%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonC = styledMUI(Button)`
    background-color:#ECD64F;
    color:#fff;
    &:hover{
      background-color:#f3e06c;
    }
    &:disabled{
      color:#fff;
      background-color:gray;
    }

`;

export const Box = styledMUI(BoxMUI)`
    width:60%;
    padding:0px 40px;
    @media screen and (max-width:${breakpoints.small}){
      width:100%;
    }
`;
