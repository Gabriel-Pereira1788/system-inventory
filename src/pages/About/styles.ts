import styled from "styled-components";
import breakpoints from "../../constants/breakpoints";

export const Container = styled.main`
  width: 100%;
  height: 83vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.section`
  width: 65%;
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  margin-bottom: 5%;
  @media screen and (max-width: ${breakpoints.small}) {
    width: 100%;
  }
`;

export const Text = styled.p`
  font-size: clamp(0.5em, 1.5vw, 1em);
  font-weight: 400;
  color: ${({ theme }) => theme.colors.main.graySmooth};
  line-height: 40px;
  text-shadow: 0px 1px 2px #00000030;
  text-align: justify;
  padding: 15px;
  @media screen and (max-width: ${breakpoints.small}) {
    font-size: clamp(0.5em, 2.5vw, 2.5em);
  }
`;

export const ContainerTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h3`
  font-size: clamp(0.5em, 2vw, 1.8em);
  padding-bottom: 15px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.main.yellowGold};
  font-weight: bold;
  color: #000;
  margin: 3% 0%;
`;

export const Carousel = styled.section`
  position: relative;
  transition: all 0.3s;
  /* display: flex; */
  /* flex-direction: colum; */
  width: 100%;
  height: 70vh;
  /* background-color: #fff; */
  box-shadow: 0px 3px 10px #0000001a;
  border-radius: 15px 15px;
  overflow: hidden;

  .left-side {
    right: 100%;
  }
  .center {
    left: 0%;
  }
  .right-side {
    left: 100%;
  }
`;

export const Card = styled.div`
  background-color: #fff;
  /* box-shadow: 0px 3px 10px #0000001a; */
  border-radius: 15px 15px;
  transition: all 0.3s;
  position: absolute;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 15px;
`;

export const Button = styled.button`
  /* background-color: none; */
  background: none;
  border: none;
  box-shadow: none;
  color: ${({ theme }) => theme.colors.main.yellowGold};
  font-size: 1.5em;
`;

export const ContainerCarousel = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
