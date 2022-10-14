import styled from "styled-components";
import breakpoints from "../../constants/breakpoints";

export const Container = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.section`
  width: 70%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  @media screen and (max-width: ${breakpoints.medium}) {
    width: 85%;
    margin-left: 13%;
  }
  @media screen and (max-width: ${breakpoints.small}) {
    width: 95%;
    margin-left: 0%;
    /* justify-content: center; */
  }
`;

export const ContainerTitle = styled.article`
  margin: 2% 0%;
  padding: 15px;
  text-align: left;
  width: 67%;
`;

export const Title = styled.h2`
  font-size: clamp(0.5em, 2.5vw, 3em);
  color: #000;
  text-shadow: 0px 0px 2px #0000000d;
`;

export const UserName = styled.span`
  color: ${({ theme }) => theme.colors.main.yellowGold};
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.main.colorText};
  margin-top: 3%;
  font-weight: bold;
`;
