import styled from "styled-components";

type PropsIcon = {
  width: string;
};

export const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Grid = styled.article`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-template-rows: auto auto auto;
  gap: 10px;
`;

export const Icon = styled.img<PropsIcon>`
  width: ${({ width }) => width};
  transition: all 0.3s;
  &:hover {
    transform: scale(1.2);
  }
`;

export const Tecnologie = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
