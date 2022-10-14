import styled from "styled-components";

export const Container = styled.main`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
`;

export const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.main.dark};
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

export const ContainerImage = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 500px;
  margin-bottom: 5%;
`;
export const ContainerText = styled.article`
  margin-bottom: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  height: 100%;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.main.yellowGold};
`;
export const Text = styled.h3`
  text-shadow: 1px 2px 6px #090808a1;
  font-size: 3em;
  color: white;
  font-weight: bold;
  width: 75%;
  text-align: left;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const WrapperMain = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BackgroundAbout = styled.div`
  width: 70%;
  height: 300px;
  box-shadow: 0px 2px 13px #00000094;
  border-radius: 10px;
  background-image: url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
export const AboutUs = styled.article`
  display: flex;
  height: 100%;
  background: #00000054;
  border-radius: 10px;
  justify-content: space-around;
  align-items: center;
`;

export const TitleAbout = styled.h3`
  font-size: 2.5em;
  width: 50%;
`;
