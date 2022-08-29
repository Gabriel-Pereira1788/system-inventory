import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  width: 100%;
  height: 400px;
  gap: 15px;
  grid-template-columns: 1fr 2fr;
  grid-template-areas:
    "sidenav  nav"
    "sidenav content "
    "sidenav content "
    "sidenav content"
    "sidenav content"
    "sidenav content"
    "sidenav content";
  .card {
    background-color: #fff;
    box-shadow: 0px 3px 10px #0000001a;
    width: 100%;
    padding: 15px;
    border-radius: 15px;
  }
  .main-graph {
    grid-area: sidenav;
  }
  .cards {
    display: flex;
    justify-content: space-between;
    grid-area: nav;
    background-color: transparent;
    box-shadow: none;
    padding: 0;
    box-shadow: none;
  }
  .graph-line {
    grid-area: content;
  }
`;

export const InfoProduct = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const ContainerInfos = styled.article`
  margin: 10% 0%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

export const Info = styled.div`
  margin-left: 15%;
  h3 {
    margin-bottom: 10px;
    font-size: 1em;
    font-size: 0.8em;
    color: ${({ theme }) => theme.colors.main.colorText};
  }
  span {
    font-weight: bold;
    font-size: 2em;
    color: #000;
  }
`;
