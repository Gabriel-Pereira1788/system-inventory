import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 83vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.section`
  width: 51%;
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
`;

export const Text = styled.p`
  font-size: clamp(0.5em, 1.5vw, 1.8em);
  font-weight: 400;
  color: ${({ theme }) => theme.colors.main.graySmooth};
  line-height: 40px;
  text-shadow: 0px 1px 2px #00000030;
  text-align: justify;
  padding: 15px;
`;

export const Title = styled.h3`
  font-size: clamp(0.5em, 2vw, 1.8em);
  font-weight: bold;
  color: ${({ theme }) => theme.colors.main.yellowGold};
  width: 100%;
  text-align: center;
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
