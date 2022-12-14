import styled from "styled-components";
import breakpoints from "../../constants/breakpoints";

export type PropsInformation = {
  showInformation?: boolean;
};

export const Container = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.section`
  width: 71%;
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  @media screen and (max-width: ${breakpoints.medium}) {
    width: 80%;
    margin-left: 7%;
  }

  @media screen and (max-width: ${breakpoints.small}) {
    width: 95%;
    margin-left: 0%;
  }
`;

export const Thead = styled.div`
  background-color: #efeded;
  width: 100%;
  padding: 20px;
  color: white;
  font-size: clamp(0.2em, 1vw, 1em);
  border-bottom: 2px solid #d5cecea3;
  border-radius: 15px 15px 0px 0px;
  box-shadow: 0px 3px 10px #0000001a;
`;

export const Table = styled.table`
  border-collapse: separate;
  width: 100%;
  height: 65vh;
  background-color: #fff;
  box-shadow: 0px 3px 10px #0000001a;

  thead {
    background-color: #efeded;

    th {
      padding: 15px;
      color: white;
      font-size: clamp(0.2em, 1vw, 1em);
      border-bottom: 2px solid #d5cecea3;
    }
  }
  tbody {
    border-collapse: separate;
    td {
      cursor: pointer;
      padding: 5px;
      font-size: clamp(0.2em, 1vw, 1em);
      text-align: center;
      border-bottom: 2px solid #d5cecea3;
    }
  }
`;

export const Button = styled.button`
  width: auto;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 13px;
  margin: 2% 0% 2% 0%;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.main.dark};
  &:hover {
    background-color: #62626296;
  }
`;

export const Text = styled.span`
  font-size: 11px;
  color: #fff;
  @media screen and (max-width: ${breakpoints.small}) {
    display: none;
  }
`;

export const Circle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 5px;
  margin-left: 10%;
  border-radius: 50%;
`;

export const ContainerTable = styled.div`
  width: 100%;
  height: 400px;
  overflow: auto;
  box-shadow: 0px 3px 10px #0000001a;
`;

export const RowInformation = styled.tr<PropsInformation>`
  transform: translateY(-100%);
  transition: all 0.3s;
  cursor: none;
  height: 500px;
  background-color: #fff;
  box-shadow: inset 0px 0px 6px 0px #0000004f;
`;
