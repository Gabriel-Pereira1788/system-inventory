import styled, { keyframes } from "styled-components";

type PropsInformation = {
  showInformation?: boolean;
  width?: string;
};

type PropsColumn = {
  width?: string;
};

export const Thead = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #fff;
  color: white;
  font-size: clamp(0.2em, 1vw, 1em);
  border: 1px solid #d5cece4f;
  border-radius: 15px 15px 0px 0px;
  box-shadow: 0px -1px 11px #00000008;
`;

export const ContainerTable = styled.div`
  background-color: #fff;
  width: 100%;
  height: 400px;
  overflow: auto;
  box-shadow: 0px 3px 10px #0000001a;
  border-radius: 0px 0px 15px 15px;

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.background};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.main.yellowGold};
    border-radius: 20px;
    border: 3px solid #ffa50000;
  }
`;

export const ContainerRow = styled.article`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid #00000026;
  position: relative;
`;

export const CellRow = styled.p`
  width: 200px;
  text-align: center;
  font-weight: bold;
  font-size: clamp(0.5em, 1.2vw, 1em);
  color: black;
  padding: 15px;
`;
export const CellButton = styled.div<PropsInformation>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: ${({ width }) => (width ? width : "200px")};
  padding: 15px;
  svg {
    transform: ${({ showInformation }) =>
      showInformation ? " rotate(178deg)" : " rotate(0deg)"};
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.colors.main.yellowGold};
    }
  }
`;

export const Column = styled.p<PropsColumn>`
  width: ${({ width }) => (width ? width : "200px")};
  text-align: center;
  font-weight: bold;
  font-size: clamp(0.5em, 1.2vw, 1em);
  color: #0000002e;
  padding: 9px;
`;

export const LabelSearch = styled.label`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 6px;
  border: none;
  border-radius: 15px;
  background: #cbc5c517;
  svg {
    color: #000;
  }
`;

export const Search = styled.input`
  margin-left: 5%;
  border: none;
  outline: none;
  background: none;
`;

export const Wrapper = styled.section`
  width: 100%;
  position: relative;
`;
