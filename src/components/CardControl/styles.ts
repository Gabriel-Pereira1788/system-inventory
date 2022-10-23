import styled from "styled-components";
import breakpoints from "../../constants/breakpoints";

type PropsCard = {
  width?: string;
};

export const Card = styled.article<PropsCard>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fff;
  width: ${({ width }) => (width ? width : "30%")};
  border-radius: 15px;
  box-shadow: 0px 3px 10px #0000001a;

  /* overflow: hidden; */
`;

export const Wrapper = styled.div`
  padding: 0px 15px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: ${breakpoints.medium}) {
    justify-content: center;
  }
`;
export const Info = styled.div`
  text-align: center;
  padding: 0;
  border-radius: 0;
  box-shadow: none;
  h3 {
    width: 63px;
    color: ${({ theme }) => theme.colors.main.colorText};
    font-size: clamp(0.5em, 1vw, 0.7em);
  }
  span {
    color: #000;
    font-size: clamp(0.5em, 2vw, 1.2em);
    font-weight: 700;
  }
`;

export const Percentage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 10px;
  width: 7vw;
  min-width: 60px;
`;

export const ContainerCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const CardAlert = styled.article`
  backdrop-filter: blur(2px);
  position: absolute;
  width: 100% !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffffa6;
  border-radius: 15px;
  height: 100%;
`;

export const ContainerAlert = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Alert = styled.h3`
  font-size: clamp(0.5em, 1vw, 1em);
  color: #000;
  font-weight: bold;
`;
