import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  position: fixed;
  top: 0;
  height: 100vh;
  width: 120px;
  background-color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
`;

export const ContainerDots = styled.div`
  padding: 15px;
`;
