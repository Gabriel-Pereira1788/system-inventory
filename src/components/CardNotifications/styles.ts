import styled, { keyframes } from "styled-components";

export const ViewAnimation = keyframes`
    from{
        opacity: 0.0;
    }
    to{
        opacity: 1;
    }

`;

export const Wrapper = styled.div`
  right: -160%;
  transition: all 0.3s;
  /* left: -100%; */
  cursor: auto;
  position: absolute;
  top: 110%;
  background-color: #fff;
  box-shadow: 0px 3px 10px #0000001a;
  border-radius: 10px;
  width: 18vw;
  animation: ${ViewAnimation} 0.3s;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  height: 52px;
  padding: 15px;
`;

export const Title = styled.h3`
  font-weight: bold;
  font-size: clamp(0.5em, 1.2vw, 0.8em);
  background-color: #fff;
  color: ${({ theme }) => theme.colors.main.yellowGold};
`;

export const Space = styled.div`
  background-color: #a4a4a421;
  padding: 10px 15px;
`;

export const Text = styled.p`
  font-weight: bold;
  font-size: clamp(0.5em, 1vw, 0.8em);
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.main.colorText};
`;

export const ContainerNotifications = styled.div`
  width: 100%;
  height: 245px;
  overflow-y: scroll;
  background-color: #fff;
  padding: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.background};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.main.yellowGold};
    border-radius: 20px;
    border: 3px solid #ffa50000;
  }
`;
