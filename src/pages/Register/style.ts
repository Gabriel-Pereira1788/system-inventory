import styled from "styled-components";
import {
  styled as styledMUI,
  Typography,
  Button,
  Box as BoxMUI,
} from "@mui/material";
import breakpoints from "../../constants/breakpoints";

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

export const Error = styled.p`
  color: #ff00009e;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  font-size: clamp(0.3em, 1.5vw, 1em);
`;
