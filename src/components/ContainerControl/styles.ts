import styled from "styled-components";
import breakpoints from "../../constants/breakpoints";

export const Container = styled.div`
  display: grid;
  width: 100%;
  height: 70%;
  gap: 15px;
  grid-template-columns: 1fr 2fr;
  grid-template-areas:
    "sidenav   nav nav"
    "sidenav   content content "
    "sidenav   content content "
    "sidenav   content content"
    "sidenav   content content"
    "sidenav   content content"
    "sidenav   content content";
  .card {
    background-color: #fff;
    box-shadow: 0px 3px 10px #0000001a;
    width: 100%;
    padding: 15px;
    border-radius: 15px;
  }
  .main-graph {
    flex-direction: column;
    align-items: flex-start;
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

  @media screen and (max-width: ${breakpoints.small}) {
    grid-template-areas:
      "nav   nav nav"
      "sidenav   sidenav sidenav "
      "content   content content "
      "content   content content"
      "content   content content"
      "content   content content"
      "content   content content";
    .main-graph {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
`;
