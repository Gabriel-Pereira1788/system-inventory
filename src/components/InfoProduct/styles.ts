import styled from "styled-components";
import breakpoints from "../../constants/breakpoints";

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
  height: ${({ showInformation }) => (showInformation ? "360px" : "0px")};
  box-shadow: inset 0px 0px 7px 1px #00000017;

  @media screen and (min-width: ${breakpoints.large}) {
    height: ${({ showInformation }) => (showInformation ? "45vh" : "0px")};
  }
  @media screen and (max-width: ${breakpoints.small}) {
    .icon-inventory {
      display: none;
    }
  }
  @media screen and (max-width: ${breakpoints.extraSmall}) {
    height: ${({ showInformation }) => (showInformation ? "416px" : "0px")};
    padding: ${({ showInformation }) => (showInformation ? "6px" : "0px")};
  }
`;

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  @media screen and (max-width: ${breakpoints.small}) {
    justify-content: space-evenly;
  }
`;

export const ContainerCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  article {
    @media screen and (max-width: ${breakpoints.medium}) {
      width: 25%;
    }
    @media screen and (max-width: ${breakpoints.extraSmall}) {
      width: 40%;
    }
  }
  .card-last-month {
    @media screen and (max-width: ${breakpoints.extraSmall}) {
      display: none;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  width: 79%;
  margin-top: 5%;
  flex-direction: column;
  align-items: flex-end;
  @media screen and (max-width: ${breakpoints.medium}) {
    width: 100%;
  }
  @media screen and (max-width: ${breakpoints.extraSmall}) {
    /* justify-content: center; */
    align-items: center;
  }
`;

export const WrapperInputs = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  align-items: center;
  justify-content: center;
  gap: 14px;
  width: 100%;
  justify-content: space-between;
  @media screen and (max-width: ${breakpoints.extraSmall}) {
    grid-template-columns: auto;
    width: auto;
    margin-bottom: 3%;
  }
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
  font-size: clamp(0.6em, 0.8vw, 1em);
  width: 78%;
  border: none;
  outline: none;
  padding: 7.5px;
  border-radius: 0px 8px 8px 0px;
  &:disabled {
    background-color: #efeded;
  }
`;

export const Text = styled.span`
  width: 44%;
  font-size: clamp(0.5em, 0.8vw, 1em);
  text-align: center;
  padding: 8px;
  border-radius: 8px 0px 0px 8px;
  color: #fff;
  background-color: #d1cece;
`;

export const ConfirmButton = styled.button`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 20%;
  padding: 12px;
  background-color: #3fd77c;
  border-radius: 8px;
  color: #fff;
  margin-right: 4%;
  span {
    font-size: clamp(0.8em, 1.3vw, 1.1em);
  }
  &:disabled {
    background-color: #d1cece;
  }

  @media screen and (max-width: ${breakpoints.extraSmall}) {
    width: 50%;
  }
`;
