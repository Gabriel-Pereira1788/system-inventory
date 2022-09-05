import styled from "styled-components";

type PropsInformation = {
  showInformation?: boolean;
  width?: string;
};

export const Trash = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
`;

export const ContainerInfo = styled.section<PropsInformation>`
  padding: ${({ showInformation }) => (showInformation ? "20px" : "0px")};
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
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const ContainerCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

export const Form = styled.form`
  display: flex;
  width: 79%;
  margin-top: 5%;
  flex-direction: column;
  align-items: flex-end;
`;

export const WrapperInputs = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  align-items: center;
  justify-content: center;
  gap: 14px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  border-radius: 8px;
  svg {
    margin-left: 5%;
  }
  .check {
    margin-left: 5%;
  }
`;

export const Input = styled.input`
  color: gray;
  text-align: center;
  font-weight: bold;
  width: 78%;
  background-color: #efeded;
  border: none;
  outline: none;
  padding: 7.5px;
  border-radius: 0px 8px 8px 0px;
`;

export const Text = styled.span`
  width: 44%;
  font-size: clamp(0.5em, 0.8vw, 1em);
  text-align: center;
  padding: 9px;
  border-radius: 8px 0px 0px 8px;
  color: #fff;
  background-color: #d1cece;
`;

export const ConfirmButton = styled.button`
  display: flex;
  justify-content: space-evenly;
  width: 20%;
  padding: 12px;
  background-color: #3fd77c;
  border-radius: 8px;
  color: #fff;
  margin-right: 4%;
`;
