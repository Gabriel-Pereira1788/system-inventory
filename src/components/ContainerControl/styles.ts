import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  width: 100%;
  height: 400px;
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
