import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0px;
  border-bottom: 1px solid #0000001a;
  a {
    color: ${({ theme }) => theme.colors.main.colorText};
    text-shadow: none;
  }
`;

export const TypeNotification = styled.h3`
  font-weight: bold;
  font-size: clamp(0.5em, 1vw, 0.8em);
  color: #787373;
  text-align: left;
  text-transform: capitalize;
`;

export const MessageNotification = styled.p`
  text-shadow: none;
  color: ${({ theme }) => theme.colors.main.colorText};
  font-size: clamp(0.5em, 1vw, 0.7em);
  text-align: left;
  strong {
    color: ${({ theme }) => theme.colors.main.yellowGold};
  }
`;
