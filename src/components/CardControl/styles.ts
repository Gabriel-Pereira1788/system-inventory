import styled from "styled-components";

type PropsCard = {
  width?: string;
};

export const Card = styled.article<PropsCard>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  width: ${({ width }) => (width ? width : "30%")};
  padding: 15px;
  border-radius: 15px;
  box-shadow: 0px 3px 10px #0000001a;
`;
export const Info = styled.div`
  padding: 0;
  border-radius: 0;
  box-shadow: none;
  h3 {
    width: 63px;
    color: ${({ theme }) => theme.colors.main.colorText};
    font-size: clamp(0.2em, 1.5vw, 0.7em);
  }
  span {
    color: #000;
    font-size: 2em;
    font-weight: 700;
  }
`;

export const Percentage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 10px;
`;

export const ContainerCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const CardAlert = styled.article`
  backdrop-filter: blur(2px);
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffffa6;
  height: 100%;
`;

export const Alert = styled.h3`
  font-size: 15px;
  color: #000;
  font-weight: bold;
`;
