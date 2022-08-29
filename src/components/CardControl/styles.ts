import styled from "styled-components";

export const Card = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  width: 30%;
  padding: 15px;
  border-radius: 15px;
  box-shadow: 0px 3px 10px #0000001a;
`;
export const Info = styled.div`
  padding: 0;
  border-radius: 0;
  box-shadow: none;
  h3 {
    color: ${({ theme }) => theme.colors.main.colorText};
    font-size: clamp(0.2em, 1.5vw, 0.7em);
  }
  span {
    color: #000;
    font-size: 2em;
    font-weight: 700;
  }
`;

export const Percentage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 10px;
`;
