import styled from "styled-components";
import breakpoints from "../../constants/breakpoints";

export const Wrapper = styled.section`
  display: flex;
  position: fixed;
  top: 0;
  height: 100vh;
  width: 10vw;
  min-width: 80px;
  background-color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: ${breakpoints.small}) {
    /* position: initial; */
    top: auto;
    bottom: 0;
    margin-top: 3%;
    width: 100%;
    height: 70px;
    flex-direction: row;
  }
`;

export const ContainerIcons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  flex: 0.5;
  a {
    list-style: none;
    &:hover > svg {
      color: ${({ theme }) => theme.colors.main.yellowGold};
      transition: all 0.3s;
    }
    svg {
      transition: all 0.3s;
      color: #000;
    }
  }
  @media screen and (max-width: ${breakpoints.small}) {
    flex-direction: row;
  }
`;

export const ContainerDots = styled.div`
  padding: 15px;
  @media screen and (max-width: ${breakpoints.small}) {
    display: none;
  }
`;
