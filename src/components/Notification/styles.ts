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

export const ContainerText = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
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

export const ContainerDate = styled.div`
  width: 100%;
  text-align: left;
`;

export const Text = styled.span`
  text-shadow: none;
  color: ${({ theme }) => theme.colors.main.colorText};
  font-size: clamp(0.5em, 1vw, 0.7em);
`;

export const Alert = styled.span`
  border-radius: 50%;
  margin-right: 2%;
  width: 8px;
  height: 8px;
  background: red;
`;
