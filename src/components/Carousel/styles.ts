import styled from "styled-components";

export const ContainerCards = styled.section`
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
