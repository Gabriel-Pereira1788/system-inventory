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
  width: 70%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
`;

export const Title = styled.article`
  margin: 2% 0%;
  padding: 15px;
  text-align: left;
  width: 67%;
  h2 {
    font-size: clamp(0.5em, 2.5vw, 3em);
    color: #000;
    text-shadow: 0px 0px 2px #0000000d;
    span {
      color: ${({ theme }) => theme.colors.main.yellowGold};
    }
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.main.colorText};
  margin-top: 3%;
  font-weight: bold;
`;