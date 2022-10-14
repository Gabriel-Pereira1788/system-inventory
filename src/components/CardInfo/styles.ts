import styled, { keyframes } from "styled-components";
import breakpoints from "../../constants/breakpoints";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 5px 15px 0px 15px;
  font-size: 12px;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  @media screen and (max-width: ${breakpoints.small}) {
    width: auto;
  }
`;

export const AnimationView = keyframes`
  from{
    opacity: 0.0;
  }
  to{
    opacity: 1;
  }
`;

export const Card = styled.aside`
  transition: all 0.3s;
  position: absolute;
  /* width: 100px;
  height: 100px; */
  background-color: #fff;
  padding: 10px;
  right: -12%;
  top: -80px;
  border-radius: 15px;
  box-shadow: 0px 3px 10px #0000001a;
  animation: ${AnimationView} 0.3s;
`;

export const ContainerInfo = styled.article`
  padding: 10px;
  width: 100%;
  display: flex;
`;

export const Info = styled.p`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.main.colorText};
  font-size: clamp(0.5em, 1vw, 0.7em);
  text-align: justify;
`;
