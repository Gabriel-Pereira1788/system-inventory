import styled from "styled-components";

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
      padding: 5px;
      font-size: clamp(0.2em, 1vw, 1em);
      text-align: center;
      border-bottom: 2px solid #d5cecea3;
    }
  }
`;

export const Button = styled.button`
  transition: all 0.3s;
  display: flex;
  align-items: center;
  padding: 20px;
  margin: 2% 0% 2% 0%;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.main.dark};
  &:hover {
    background-color: #62626296;
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
