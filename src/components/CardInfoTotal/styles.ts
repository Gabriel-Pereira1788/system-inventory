import styled from "styled-components";
import breakpoints from "../../constants/breakpoints";

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
  @media screen and (max-width: ${breakpoints.small}) {
    width: auto;
  }
`;

export const Info = styled.div`
  margin-top: 10%;
  margin-left: 15%;
  h3 {
    margin-bottom: 10px;
    font-size: clamp(0.5em, 1vw, 0.8em);
    color: ${({ theme }) => theme.colors.main.colorText};
  }
  span {
    font-weight: bold;
    font-size: clamp(0.7em, 2.3vw, 2em);
    color: #000;
  }

  @media screen and (max-width: ${breakpoints.small}) {
    display: flex;
    flex-direction: column;
    margin-top: 0%;
    margin-left: 3%;
  }
`;
