import styled from "styled-components";
import breakpoints from "../../constants/breakpoints";

type PropsList = {
  content?: string;
};

export const Nav = styled.nav`
  padding: 15px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  background-color: transparent;
  z-index: 1;
`;

export const Logo = styled.h2`
  flex: 1;
  text-shadow: -1px 1px 7px #0908084f;
  padding: 20px;
  margin-left: 5%;
`;

export const List = styled.ul<PropsList>`
  display: flex;
  flex: 1;
  list-style: none;
  justify-content: ${({ content }) => (content ? content : "space-between")};
  align-items: center;
  li {
    position: relative;
    font-weight: 600;
    a {
      padding: 15px;
      text-shadow: 0px 1px 4px #0908082b;
      color: white;
    }
    .active {
      color: #000;
      border-bottom: 2px solid ${({ theme }) => theme.colors.main.yellowGold};
    }
  }
`;

export const Card = styled.div`
  display: none;
  position: absolute;
  right: 5%;
  width: 100px;
  background-color: ${({ theme }) => theme.colors.main.graySmooth};
  height: 200px;
`;

export const WrapperIcon = styled.div`
  position: relative;
  box-shadow: 0px 2px 4px #00000024;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 10px;
  padding: 15px;
`;

export const ContainerIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  li {
    cursor: pointer;
    margin-right: 10%;
  }
  @media screen and (max-width: ${breakpoints.small}) {
    justify-content: space-between;
    width: 100%;
    li {
      margin-right: 0%;
    }
  }
`;

export const ContainerLinks = styled.div`
  width: 81%;
  display: flex;
  align-items: center;
  justify-content: center;
  li {
    margin: 0% 5%;
    font-size: clamp(0.5em, 1.3vw, 1.5em);
  }
  @media screen and (max-width: ${breakpoints.small}) {
    display: none;
  }
`;
