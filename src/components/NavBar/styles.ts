import styled from "styled-components";

export const Nav = styled.nav`
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

export const List = styled.ul`
  display: flex;
  flex: 1;
  list-style: none;
  justify-content: space-evenly;
  li {
    font-weight: 600;
    a {
      padding: 15px;
      text-shadow: -1px 1px 7px #0908084f;
      color: white;
    }
    .active {
      color: #000;
      border-bottom: 2px solid ${({ theme }) => theme.colors.main.yellowGold};
    }
  }
`;
