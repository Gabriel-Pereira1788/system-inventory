import styled from "styled-components";

type PropsInformation = {
  showInformation?: boolean;
  width?: string;
};

export const ContainerInfo = styled.section<PropsInformation>`
  /* padding: 20px; */
  display: flex;
  align-items: center;
  background-color: #fff;
  visibility: ${({ showInformation }) =>
    showInformation ? "visible" : "hidden"};
  transition: all 0.3s;
  display: flex;
  width: 100%;
  height: ${({ showInformation }) => (showInformation ? "316px" : "0px")};
  box-shadow: inset 0px 0px 7px 1px #00000017;
`;

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
`;
