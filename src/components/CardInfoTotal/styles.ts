import styled from "styled-components";

export const InfoProduct = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const ContainerInfos = styled.article`
  /* margin: 10% 0%; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

export const Info = styled.div`
  margin-top: 10%;
  margin-left: 15%;
  h3 {
    margin-bottom: 10px;
    font-size: 1em;
    font-size: 0.8em;
    color: ${({ theme }) => theme.colors.main.colorText};
  }
  span {
    font-weight: bold;
    font-size: 2em;
    color: #000;
  }
`;
