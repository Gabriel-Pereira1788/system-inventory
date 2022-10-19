import styled from "styled-components";

import {
  styled as styledMUI,
  Typography,
  Paper as PaperMUI,
} from "@mui/material";
import breakpoints from "../../constants/breakpoints";

export const Paper = styledMUI(PaperMUI)`
  width:85%;
  @media screen and (max-width:${breakpoints.small}){
    width:65%;
  }
  @media screen and (max-width:${breakpoints.extraSmall}){
    width:100%;
  }

`;

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

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

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.main.dark};
  height: 100%;
  width: 100%;
  @media screen and (max-width: ${breakpoints.small}) {
    display: none;
  }
`;

export const Img = styled.img`
  width: 250px;
`;

export const Text = styled.h3`
  text-shadow: 1px 3px 5px #0000007a;
  width: 61%;
  font-size: 2em;
  font-weight: bold;
`;
